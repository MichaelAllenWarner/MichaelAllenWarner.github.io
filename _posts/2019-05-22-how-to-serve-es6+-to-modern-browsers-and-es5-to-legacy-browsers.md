---
layout: post
title:  "How to Serve ES6+ to Modern Browsers and ES5 to Legacy Browsers"
date:   2019-05-22 11:28:56 -0400
categories: web development, javascript, modules, webpack, babel
---
## A Good Way

Philip Walton has a [great article](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) about using ES modules in the browser. The main takeaway is that because modern browsers will run scripts with the `type="module"` attribute but ignore those with the `nomodule` attribute, whereas legacy browsers will run scripts with the `nomodule` attribute but ignore those with the `type="module"` attribute, we now have a simple way to serve slimmed-down ES6+ scripts to browsers that can handle them and polyfill-bloated ES5 fallbacks to those that can’t. The relevant HTML might typically look something like this:

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

(note the placement of the script tags&mdash;ordinary scripts are often tucked at the bottom of the body because they run as soon as they’re called, but modules are executed *after* the document parses and can always safely go in the head).

To be clear, it doesn’t matter whether the ES6+ version is actually a module. What makes this trick so wonderful is that modern browsers *won’t even download* scripts marked `nomodule`! So you can write your code in ES6+, use Webpack and Babel to build *two* bundles (a small ES6+ one and a larger one compiled to ES5 with any needed polyfills), and then serve both files as in the HTML snippet above. The browsers take care of the rest.

The principle here is that any browser that supports modules necessarily supports ES6+. And because modern browsers auto-update, it’s *almost always* the case that a browser that supports ES6+ supports modules as well. The rare exceptions will run the ES5 fallback&mdash;no biggie.

## A Better Way

But if we’re optimizing for modern browsers, why not also optimize for our poor legacy users? What I’m getting at is that while browsers that don’t support modules won’t *run* scripts with the `type="module"` attribute, they will *download* them. What a waste!

To that end, I’ve come up with an improvement on Walton’s method:

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

This little script, written in ES5 for obvious reasons, looks for the `noModule` property in the `HTMLScriptElement` interface (see the MDN reference [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties)). If the `noModule` property is there, the browser supports ES6+, and `<script src="main.js"></script>` gets appended to the head. If it isn’t, the browser almost certainly does *not* support ES6+, and the fallback `<script src="es5-main.js"></script>` gets appended to the head instead. Once the appropriate script element is added to the head, the browser immediately downloads the corresponding file and runs it.

Two quick notes. First, `document.head` is faster than `document.getElementsByTagName('head')[0]`, but I leave the latter as a fallback for legacy browsers that don’t support the former. Second, I’ve placed my script at the bottom of the body to ensure that the appropriate file is run *after* the document has been parsed. (Of course it works just as well to place the code in an external `.js` file and *call* it at the end of the body.)

P.S. Walton also suggests using separate Webpack configuration files for the two bundles, but this isn’t necessary. Webpack supports [exporting multiple configurations](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations) from a single `webpack.config.js` file.