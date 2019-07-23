import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import DevelopmentSection from '../components/Home/DevelopmentSection'
import StageSection from '../components/Home/StageSection'
import FooterSection from '../components/Home/FooterSection'

export default function Index(props: PageProps) {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO />
      <StageSection />
      <DevelopmentSection />
      <FooterSection />

      <Link to="/projects/">Go to page 2</Link>
    </Layout>
  )
}
