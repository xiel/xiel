/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('source-map-support').install()
require('ts-node').register({
  files: true,
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

// typescript files
exports.createPages = require('./src/pages/createPages').default
