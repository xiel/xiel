import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import DevelopmentSection from '../components/Home/DevelopmentSection'
import StageSection from '../components/Home/StageSection'
import FooterSection from '../components/Home/FooterSection'
import InternalLink from '../components/InternalLink'
import { GridContext, GridItem, GridRow } from '../components/Layout/Grid'

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />

      <DevelopmentSection />
      <FooterSection />

      <InternalLink to="/projects/">
        {t('Page.Index.ProjectsCTALabel')}
      </InternalLink>
    </Layout>
  )
}
