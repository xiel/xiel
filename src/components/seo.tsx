/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SeoQuery } from '../graphqlTypes'

interface Props {
  description?: string
  lang?: string
  title?: string
  meta?: HelmetProps['meta']
}

function SEO({ title = '', lang = `en`, meta = [], description = `` }: Props) {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  if (!site || !site.siteMetadata) {
    return null
  }

  const metaDescription = description || site.siteMetadata.description || ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={
        title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // @ts-ignore
      ].concat(meta)}
    />
  )
}

export default SEO
