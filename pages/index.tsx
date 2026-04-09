import { useTranslation } from 'react-i18next'

import HomePage from '../components/Home/HomePage'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

export default function Index() {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        description={t('SEO.Description') ?? ''}
        title={t('SEO.Title') ?? ''}
      />
      <HomePage />
    </Layout>
  )
}
