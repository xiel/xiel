import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import IntroSection from '../components/Home/IntroSection'
import StageSection from '../components/Home/Stage/StageSection'
import ClientsPartners from '../components/Home/ClientPartners/ClientsPartners'
import Technologies from '../components/Home/Technologies/Technologies'
import { useTranslation } from 'react-i18next'
import { IPageContext } from '../types/GlobalTypes'
import useEnforceRecommendedLanguageOnce from '../hooks/useEnforceRecommendedLanguageOnce'
import OpenSourceProjects from '../components/Home/Projects/OpenSourceProjects'

export default function Index(props: PageProps<IPageContext>) {
  const { t } = useTranslation()

  useEnforceRecommendedLanguageOnce(props)

  return (
    <Layout headerFixed>
      <SEO description={t('Intro.Title')} />
      <StageSection />
      <IntroSection />
      <Technologies />
      <OpenSourceProjects />
      <ClientsPartners />
    </Layout>
  )
}
