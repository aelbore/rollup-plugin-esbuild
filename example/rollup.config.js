const esbuild = require('../dist')

const isDev = process.env.NODE_ENV === 'development'

export default {
  input: 'example/index.js',
  output: {
    file: 'dist/example.js',
    format: 'cjs',
  },
  plugins: [
    esbuild({
      watch: isDev,
      minify: !isDev,
    }),
  ],
}
