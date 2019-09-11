/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { SeoQuery } from '../graphqlTypes'
import { useTranslation } from 'react-i18next'
import { PageContext } from '../Providers/PageContext'

interface Props {
  description?: string
  title?: string
  meta?: HelmetProps['meta']
}

function SEO({ title: titleProp = '', meta = [], description = `` }: Props) {
  const { i18n } = useTranslation()
  const { lngAlternates } = useContext(PageContext)

  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            origin
          }
        }
      }
    `
  )

  if (!site || !site.siteMetadata) {
    return null
  }

  const mainTitle = site.siteMetadata.title || ''
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : site.siteMetadata.origin || ''
  const title = titleProp ? `${titleProp} | ${mainTitle}` : mainTitle
  const metaDescription = description || site.siteMetadata.description || ''
  const langAlternateLinks = Object.entries(lngAlternates || {}).map(
    ([lng, lngPath]) => ({
      rel: 'alternate',
      hreflang: lng,
      href: origin + lngPath,
    })
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language,
      }}
      title={title}
      link={langAlternateLinks}
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
