import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import Intro from '../components/Home/Intro'
import StageSection from '../components/Home/Stage/StageSection'
import ClientsPartners from '../components/Home/ClientPartners/ClientsPartners'
import IntroSection from '../components/Home/IntroSection'
import Technologies from '../components/Home/Technologies/Technologies'
import { useTranslation } from 'react-i18next'
import { IPageContext } from '../types/GlobalTypes'
import useEnforceRecommendedLanguageOnce from '../hooks/useEnforceRecommendedLanguageOnce'

export default function Index(props: PageProps<IPageContext>) {
  const { t } = useTranslation()

  useEnforceRecommendedLanguageOnce(props)

  return (
    <Layout>
      <SEO description={t('Intro.Title')} />
      <StageSection />
      <IntroSection />
      <Intro />
      <Technologies />
      <ClientsPartners />
    </Layout>
  )
}
