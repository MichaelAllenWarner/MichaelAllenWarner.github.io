---
layout: post
title:  "How to Serve ES6+ to Modern Browsers and ES5 to Legacy Browsers"
date:   2019-05-22 11:28:56 -0400
categories: webdev
excerpt: >
  The time has come to stop indiscriminately serving polyfill-bloated ES5-compiled JavaScript to all clients! Modern browsers that can handle slimmer ES6+ bundles should get them. The usual way of doing this with the <code>script</code> tag’s new <code>type="module"</code> and <code>nomodule</code> attributes is nice but flawed. I offer an alternative that accomplishes the same thing without forcing legacy browsers to needlessly download ES6+ bundles they can’t run.
---
## A Good Way

Philip Walton has a [great article](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) about using ES modules in the browser. The main takeaway is that because modern browsers will run scripts with the `type="module"` attribute but ignore those with the `nomodule` attribute, whereas legacy browsers will run scripts with the `nomodule` attribute but ignore those with the `type="module"` attribute, we now have a simple way to serve slimmed-down ES6+ scripts to browsers that can handle them and polyfill-bloated ES5 fallbacks to those that can’t. (But what exactly does *ignore* mean? Devil’s in the details, and we’ll get there.) The relevant HTML might typically look something like this:

```html
<head>
  <!-- ... -->
  <script type="module" src="main.js"></script>
</head>
<body>
  <!-- ... -->
  <script nomodule src="es5-main.js"></script>
</body>
```

Note the placement of the script tags&mdash;ordinary scripts are often tucked at the bottom of the body because they run as soon as they’re called, but modules are executed *after* the document parses and can always safely go in the head.

To be clear, it doesn’t matter whether the ES6+ version is actually a module. In fact, it’s more performant if it isn’t (better for the client to download a single bundle than have to fetch multiple files). We’re using module-support as a *proxy* for ES6-support. And it’s a damn good proxy! Why? First, any browser that supports modules necessarily supports ES6+. Second, modern browsers auto-update, which means that browsers that support ES6+ but not modules are exceedingly rare (and they’ll just run the ES5 fallback instead&mdash;no biggie.)

Now, about those devilish details&hellip; what did we mean by *ignore* in the first paragraph? Actually we meant two things:

- modern browsers won’t attempt to download scripts marked `nomodule` (this is what makes the trick worthwhile!);
- legacy browsers will download but not execute scripts marked `type="module"`.

So to sum up, the procedure here is to write your code in ES6+, use Webpack and Babel to build *two* bundles (a small ES6+ one and a larger one compiled to ES5 with any needed polyfills; I use Webpack’s [babel-loader](https://webpack.js.org/loaders/babel-loader/) plugin), and then serve both files as in the HTML snippet above. The browsers will take care of the rest.

But what about our poor legacy users?

## A Better Way

If we’re optimizing for browsers that support modules, why not also optimize for those that don’t? There’s no need for legacy browsers to download ES6+ bundles they can’t run. To that end, I’ve come up with an improvement on Walton’s method:

```html
<head>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <script>
    var head = document.head || document.getElementsByTagName('head')[0];
    var testScript = document.createElement('script');
    testScript.src = ('noModule' in testScript) ? 'main.js' : 'es5-main.js';
    head.appendChild(testScript);
  </script>
</body>
```

This little script, written in ES5 for obvious reasons, looks for the `noModule` property in the `HTMLScriptElement` interface (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties)). If it’s there, then the browser supports ES6+, and `<script src="main.js"></script>` gets appended to the head. If it isn’t, then the fallback `<script src="es5-main.js"></script>` gets appended instead. Either way, the browser immediately downloads the appropriate file and runs it.

Two quick notes. First, `document.getElementsByTagName('head')[0]` is there as a fallback for *super*-legacy browsers that don’t support the faster `document.head` (we’re talking [IE 8](https://developer.mozilla.org/en-US/docs/Web/API/Document/head#Browser_compatibility)). Second, I’ve placed my script at the bottom of the body to ensure that the file in question is run *after* the document has been parsed. (Of course it works just as well to place the code in an external `.js` file and *call* it at the end of the body.)

### Webpack and Web Workers

Walton also suggests using separate Webpack configuration files for the two bundles, but this isn’t necessary. Webpack supports [exporting multiple configurations](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations) from a single `webpack.config.js` file. This comes in handy for Web Workers, too, which can likewise benefit from the `noModule` trick described in this post. Just use Webpack and Babel to build two versions of your worker (one ES6+, one ES5), and include something like the following in the source code of your main script:

```javascript
const testScript = document.createElement('script');
const workerFile = ('noModule' in testScript) ? 'worker.js' : 'es5-worker.js';
const worker = new Worker(workerFile);
```

This is what I did in my Sudoku Solver. [Here](https://github.com/MichaelAllenWarner/react-sudoku-solver/blob/master/webpack.config.js) is my Webpack configuration file (four bundles!), and [here](https://github.com/MichaelAllenWarner/react-sudoku-solver/blob/master/src/main/worker.js) is where I call the appropriate worker from my main script.
