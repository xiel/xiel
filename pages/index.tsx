import React from 'react'
import { useTranslation } from 'react-i18next'

import ClientsPartners from '../components/Home/ClientPartners/ClientsPartners'
import IntroSection from '../components/Home/IntroSection'
import OpenSourceProjects from '../components/Home/Projects/OpenSourceProjects'
import StageSection from '../components/Home/Stage/StageSection'
import Technologies from '../components/Home/Technologies/Technologies'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

export default function Index() {
  const { t } = useTranslation()

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
