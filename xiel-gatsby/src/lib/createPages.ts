/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { resolve, join } from "path"
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
  const lanCfgs = [
    {
      lngBasePath: "/",
      lng: "en",
    },
    {
      lngBasePath: "/de",
      lng: "de",
    },
  ]

  lanCfgs.forEach(({ lng, lngBasePath }) => {
    console.log(resolve(__dirname, "../pageTemplates/projects.tsx"))

    createPage({
      path: `${join(lngBasePath)}`,
      component: resolve(__dirname, "../pageTemplates/index.tsx"),
      context: {
        lng,
        lngBasePath,
      },
    })

    createPage({
      path: `${join(lngBasePath, "projects")}`,
      component: resolve(__dirname, "../pageTemplates/projects.tsx"),
      context: {
        lng,
        lngBasePath,
      },
    })

    projects.map(({ node: { slug } }) => {
      if (!slug) return

      createPage({
        path: `${join(lngBasePath, slug)}`,
        component: resolve(__dirname, "../pageTemplates/project.tsx"),
        context: {
          slug,
          lng,
          lngBasePath,
        },
      })
    })
  })
}
