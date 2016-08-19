/* global require */
'use strict';

const gulp   = require('gulp');
const rollup = require('rollup');
const buble  = require('rollup-plugin-buble');

// Change paths as needed
const paths = {
  js: {
    entry: './src/main.js',
    dest: './dist/bundle.js',
    watch: './src/**/*.js'
  }
};

gulp.task('rollup', () => {
  let options = {
    entry: paths.js.entry,
    plugins: [
      buble(),
    ]
  };

  let dest = paths.js.dest;

  rollup.rollup(options).then((bundle) => {
    let format = 'umd';
    let result = bundle.generate({ format });
    bundle.write({ format, dest });
  });
});

gulp.task('default', ['rollup'], () => {
  gulp.watch([paths.js.watch], ['rollup']);
});