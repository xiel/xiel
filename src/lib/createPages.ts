/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { join, resolve } from 'path'
import { NodePluginArgs } from 'gatsby'
import { IPageContext, PageLocaleConfig } from '../types/GlobalTypes'

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
    reporter.panic('Cant load pages')
    return
  }

  // const projects = result.data.projects.edges as ProjectJsonEdge[]
  const languageConfigs: PageLocaleConfig[] = [
    {
      lngBasePath: '/',
      lng: 'en',
    },
    {
      lngBasePath: '/de',
      lng: 'de',
    },
  ]

  languageConfigs.forEach(({ lng, lngBasePath }) => {
    createPage<IPageContext>({
      path: join(lngBasePath, '/'),
      component: resolve(__dirname, '../pageTemplates/index.tsx'),
      context: {
        lng,
        lngBasePath,
        lngAlternates: Object.fromEntries(
          languageConfigs.map((c) => [c.lng, join(c.lngBasePath, '/')])
        ),
      },
    })

    // Project Pages (not used atm.)
    // createPage<IPageContext>({
    //   path: `${join(lngBasePath, 'projects/')}`,
    //   component: resolve(__dirname, '../pageTemplates/projects.tsx'),
    //   context: {
    //     lng,
    //     lngBasePath,
    //     lngAlternates: Object.fromEntries(
    //       languageConfigs.map((c) => [c.lng, join(c.lngBasePath, 'projects/')])
    //     ),
    //   },
    // })
    //
    // projects.forEach(({ node: { slug } }) => {
    //   if (!slug) return
    //
    //   createPage<IPageContext>({
    //     path: `${join(lngBasePath, slug, '/')}`,
    //     component: resolve(__dirname, '../pageTemplates/project.tsx'),
    //     context: {
    //       slug,
    //       lng,
    //       lngBasePath,
    //       lngAlternates: Object.fromEntries(
    //         languageConfigs.map((c) => [c.lng, join(c.lngBasePath, slug, '/')])
    //       ),
    //     },
    //   })
    // })
  })
}
