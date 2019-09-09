import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import Intro from '../components/Home/Intro'
import StageSection from '../components/Home/Stage/StageSection'
import ClientsPartners from '../components/Home/ClientPartners/ClientsPartners'
import IntroSection from '../components/Home/IntroSection'
import Technologies from '../components/Home/Technologies/Technologies'

export default function Index(props: PageProps) {
  return (
    <Layout>
      <SEO />
      <StageSection />
      <IntroSection />
      <Intro />
      <Technologies />
      <ClientsPartners />
    </Layout>
  )
}
