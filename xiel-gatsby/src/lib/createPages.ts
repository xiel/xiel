/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { resolve } from "path"
import { NodePluginArgs } from "gatsby"
import { ProjectJsonEdge } from "../graphqlTypes"

// based on: https://github.com/gatsbyjs/gatsby/issues/1457#issuecomment-381405638

export default async function createPages({
  boundActionCreators: { createPage },
  graphql,
  reporter,
}: NodePluginArgs & { graphql: any }) {
  const result = await graphql(`
    query ProjectPages {
      projects: allProjectJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("Cant load pages")
    return
  }

  const projects = result.data.projects.edges as ProjectJsonEdge[]

  projects.map(({ node: { slug } }) => {
    if (!slug) return

    createPage({
      path: `/${slug}/`,
      component: resolve(__dirname, "../src/pageTemplates/project.tsx"),
      context: {
        slug,
      },
    })
  })
}
