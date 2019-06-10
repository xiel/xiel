/**
 * Loads ts-node to be able to load the config files as Typescript
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("source-map-support").install()
require("ts-node").register({
  files: true,
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
})

exports.tsnode = tsnode
