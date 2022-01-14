import Head from 'next/head'
import React from 'react'

interface Meta {
  name: string
  content: string
}

interface Props {
  description?: string
  title?: string
  meta?: Meta[]
}

function SEO({ title: titleProp = '', meta = [], description = `` }: Props) {
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://xiel.dev'
  const mainTitle = 'FrontEnd Developer · Felix Leupold · XIEL'
  const title = titleProp ? `${titleProp} | ${mainTitle}` : mainTitle
  const metaDescription = description || ''

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      {[
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
          name: `og:image`,
          content: `${origin}/stage/deepspace-social.jpg`,
        },
        {
          name: `twitter:image`,
          content: `${origin}/stage/deepspace-social.jpg`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@xiel',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta)
        .map((m) => (
          <meta key={m.name + m.content} name={m.name} content={m.content} />
        ))}
    </Head>
  )
}

export default SEO
