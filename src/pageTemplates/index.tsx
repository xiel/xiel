import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import DevelopmentSection from '../components/Home/DevelopmentSection'
import StageSection from '../components/Home/StageSection'
import InternalLink from '../components/InternalLink'

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />
      <DevelopmentSection />

      <InternalLink to="/projects/">
        {t('Page.Index.ProjectsCTALabel')}
      </InternalLink>
    </Layout>
  )
}
