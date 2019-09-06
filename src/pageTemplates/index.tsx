import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import CorePrinciples from '../components/Home/CorePrinciples'
import StageSection from '../components/Home/Stage/StageSection'
import ClientsPartners from '../components/Home/ClientsPartners'
import Button from '../atoms/Button'
import IntroSection from '../components/Home/IntroSection'
import Technologies from '../components/Home/Technologies'

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />
      <IntroSection />
      <CorePrinciples />
      <Technologies />
      <ClientsPartners />

      <Button>Contact</Button>
      <Button primary>Contact</Button>

      {/*<InternalLink to="/projects/">*/}
      {/*  {t('Page.Index.ProjectsCTALabel')}*/}
      {/*</InternalLink>*/}
    </Layout>
  )
}
