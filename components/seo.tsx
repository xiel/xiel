import Head from 'next/head'
import { useTranslation } from 'react-i18next'

type Meta =
  | { name: string; property?: never; content: string }
  | { property: string; name?: never; content: string }

interface Props {
  description?: string
  title?: string
  meta?: Meta[]
}

function SEO({ title: titleProp = '', meta = [], description }: Props) {
  const { t } = useTranslation()
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://xiel.dev'
  const mainTitle = t('SEO.Title')
  const title = titleProp ? `${titleProp} | ${mainTitle}` : mainTitle
  const metaDescription = description ?? t('SEO.Description')
  const image = `${origin}/stage/deepspace-social.jpg`

  const tags: Meta[] = [
    { name: 'description', content: metaDescription },
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: image },
    ...meta,
  ]

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      {tags.map((m) => (
        <meta
          key={(m.name ?? m.property) + m.content}
          name={m.name}
          property={m.property}
          content={m.content}
        />
      ))}
    </Head>
  )
}

export default SEO
