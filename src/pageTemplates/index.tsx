import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import DevelopmentSection from '../components/Home/DevelopmentSection'
import StageSection from '../components/Home/StageSection'
import FooterSection from '../components/Home/FooterSection'
import InternalLink from '../components/InternalLink'
import { GridItem, GridRow } from '../components/Layout/Grid'

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />
      <GridRow>
        {Array.from(new Array(12)).map((_, i) => (
          <GridItem key={i} col={1}>
            {i + 1}
          </GridItem>
        ))}
        <GridItem col={1}>1</GridItem>
        <GridItem col={10}>10</GridItem>
        <GridItem col={1}>1</GridItem>
      </GridRow>
      <GridRow>
        <GridItem col={6}>6</GridItem>
        <GridItem col={6}>6</GridItem>
      </GridRow>

      <GridRow>
        <GridItem col={9}>
          9
          <GridRow>
            <GridItem col={3}>3</GridItem>
            <GridItem col={3}>3</GridItem>
            <GridItem col={3}>3</GridItem>
          </GridRow>
        </GridItem>
        <GridItem col={3}>3</GridItem>
      </GridRow>

      <GridRow>
        <GridItem col={6}>
          6
          <GridRow>
            <GridItem col={1 / 3}>1/2</GridItem>
            <GridItem col={2 / 3}>1/2</GridItem>
          </GridRow>
        </GridItem>
      </GridRow>

      <GridRow>
        <GridItem col={5}>
          5
          <GridRow>
            <GridItem col={4 / 12} />
            <GridItem>auto</GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
      <DevelopmentSection />
      <FooterSection />

      <InternalLink to="/projects/">
        {t('Page.Index.ProjectsCTALabel')}
      </InternalLink>
    </Layout>
  )
}
