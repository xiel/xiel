import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import CorePrinciples from '../components/Home/CorePrinciples'
import StageSection from '../components/Home/Stage/StageSection'
import ClientsPartners from '../components/Home/ClientsPartners'
import IntroSection from '../components/Home/IntroSection'
import Technologies from '../components/Home/Technologies'

export default function Index(props: PageProps) {
  return (
    <Layout>
      <SEO />
      <StageSection />
      <IntroSection />
      <CorePrinciples />
      <Technologies />
      <ClientsPartners />
    </Layout>
  )
}
