---
layout: post
title:  "Ch-ch-ch-ch-changes: ES Modules in Node 12; Upgrading core-js"
date:   2019-06-12 12:00:00 -0400
categories: webdev
excerpt: >
  Just cataloging a couple of updates I’ve made to my JavaScript/Node workflow. 
---

## No More require(), No More module.exports

Node 12 comes with substantially improved support for [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). You can read the official announcement [here](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) and the documentation [here](https://nodejs.org/docs/latest-v12.x/api/esm.html), but the gist of it (for my purposes, anyway) is this: if you include the line `"type": "module"` in your `package.json`, then Node will treat your project’s `.js` files as ES modules *when run with the* `--experimental-modules` *flag* (just throw it into your `"start"` script!). I made the jump last week, and now I’m using the same [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/[`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) syntax in my server-side code that I already use for my client-side stuff. So long, `require` and `module.exports`!

For reference, the relevant lines of a module-ready `package.json` file might look something like this:

```json
{
  "scripts": {
    "start": "node --experimental-modules server.js"
  },
  "type": "module"
}
```

And here are some examples of using `import` and `export` in Node, with their `require` and `module.exports` “equivalents” commented out for comparison:

```javascript
import fs from 'fs';
// const fs = require('http');

import http, { createServer } from 'http';
// const http = require('http');
// const createServer = http.createServer;

import myItem from './my-module.js';
// const myItem = require('./my-module.js');

import { myOtherItem } from './my-other-module.js';
// const myOtherItem = require('./my-other-module.js').myOtherItem;

const myObj = {};
const myFunc = () => {};
const myOtherFunc = () => {};

export { myFunc, myOtherFunc };
// module.exports = { myFunc, myOtherFunc }

export default myObj;
// no equivalent; the module.exports object is all we've got
```

## Say Goodbye to @babel/polyfill, Say Goodbye to core-js@2

With the release of `core-js@3`, the `@babel/polyfill` package [is officially deprecated](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill). Making the switch is pretty simple, because almost everything stays the same! Just install `core-js@3` as a dependency (in place of `@babel/polyfill`), and [add the line](https://babeljs.io/blog/2019/03/19/7.4.0#migration-from-core-js-2) `corejs: 3` to your `@babel/preset-env` settings, like this:

```javascript
presets: [
  ['@babel/preset-env', {
    useBuiltIns: 'usage',
    corejs: 3
  }]
]
```

If you’re used to importing polyfills *directly* from `core-js@2`, you should know that in `core-js@3` [the entry points have changed](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#packages-entry-points-and-modules-names). For example, I often import the `Map` and `Set` polyfills into my React projects ([for compatiblity with Internet Explorer](https://reactjs.org/docs/javascript-environment-requirements.html)), and I now need to tweak my code accordingly:

```javascript
import 'core-js/es/map';
import 'core-js/es/set';

// used to be:
// import 'core-js/es6/map';
// import 'core-js/es6/set';
```
