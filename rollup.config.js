import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  sourceMap: 'inline',
  output: {
    file: './dist/bundle.js',
    name: 'bundle',
    format: 'umd'
  },
  watch: {
    include: 'src/**'
  },
  plugins: [ 
    json(), 
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }) ]
}