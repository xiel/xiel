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

      <GridContext gap={32}>
        <GridRow justify="center">
          {Array.from(new Array(12)).map((_, i) => (
            <GridItem key={i} col={1} />
          ))}
          <GridItem col={13} />
          <GridItem col={10} />
          <GridItem col={1} />
        </GridRow>
        <GridRow>
          <GridItem col={6} />
          <GridItem col={4} />
        </GridRow>

        <GridRow align="center">
          <GridItem col={1} />
          <GridItem col={10}>
            <GridRow>
              <GridContext columns={12} gap={16}>
                <GridRow>
                  {Array.from(new Array(12)).map((_, i) => (
                    <GridItem key={i} col={1}>
                      {i + 1}
                    </GridItem>
                  ))}
                </GridRow>
                <GridRow>
                  <GridItem col={1} />
                  <GridItem col={6} />
                  <GridItem col={1 / 2} />
                  <GridItem col={12} />
                  <GridItem col={1} />
                </GridRow>
              </GridContext>{' '}
            </GridRow>
          </GridItem>
          <GridItem col={1} />
        </GridRow>

        <GridRow>
          <GridItem col={9}>
            <GridRow>
              <GridItem col={3} />
              <GridItem col={3} />
              <GridItem col={3} />
            </GridRow>
          </GridItem>
          <GridItem col={3} />
        </GridRow>

        <GridRow>
          <GridItem col={6}>
            relative
            <GridRow>
              <GridItem col={1 / 3} />
              <GridItem col={2 / 3} />
            </GridRow>
          </GridItem>
        </GridRow>

        <GridRow>
          <GridItem col={5}>
            <GridRow>
              <GridItem col={4 / 12} />
              <GridItem>auto</GridItem>
            </GridRow>
          </GridItem>
        </GridRow>
      </GridContext>

      <DevelopmentSection />
      <FooterSection />

      <InternalLink to="/projects/">
        {t('Page.Index.ProjectsCTALabel')}
      </InternalLink>
    </Layout>
  )
}
