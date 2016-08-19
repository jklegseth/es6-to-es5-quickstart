# es6-to-es5-quickstart-gulp
Very simple quickstart using [Gulp](https://github.com/gulpjs/gulp), [Rollup](http://rollupjs.org/) and [Buble](buble.surge.sh) for ES6 to ES5 compilation with support for modules.

## Installation
`npm install`

## Gulp tasks
`gulp rollup` will look for `src/main.js`, handle module loading and compile to ES5, and output to `dist/bundle.js`.

`gulp` (or `gulp default`) will start a `gulp watch` on the watch path and call `gulp rollup` on each change.
