import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const env = process.env.NODE_ENV

const configs = [
  // browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'Whale'
    },
    plugins: [
      resolve(), // so Rollup can find `vendors`
      commonjs(), // so Rollup can convert `vendors` to ES modules
      babel({
        exclude: ['node_modules/**'],
        plugins: ['external-helpers']
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'lib/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        plugins: ['external-helpers']
      })
    ]
  }
]

if (env === 'production') {
  configs.forEach(config => {
    config.plugins.push(terser())
  })
}

export default configs