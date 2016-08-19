import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [ json(), buble() ],
  dest: 'dist/bundle.js'
}; 