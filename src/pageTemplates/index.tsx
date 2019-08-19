import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import DevelopmentSection from '../components/Home/DevelopmentSection'
import StageSection from '../components/Home/StageSection'
import ClientsPartners from '../components/Home/ClientsPartners'
import { css } from '@emotion/core'
import { GridItem, GridRow } from '../components/Layout/Grid'
import { colorTextBright } from '../styles/theme'
import Button from '../atoms/Button'
import SocialLinkList from '../atoms/SocialLinkList'
import Headline from '../atoms/Typo/Headline'

const introBox = css`
  position: relative;
  background: hsla(216, 32%, 9%, 0.9);
  background: linear-gradient(
    to bottom,
    hsla(314, 100%, 9%, 0.9),
    hsla(205, 90%, 10%, 1)
  );
  margin-top: -20%;
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem -0.5rem #000;
`

const introText = css`
  color: hsla(0, 0%, 100%, 0.5);
`

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />

      <GridRow
        justify="center"
        css={css`
          height: 100%;
        `}
      >
        <GridItem col={[12, 12, 12, 10]}>
          <GridRow>
            <GridItem col={[8, 8, 5]}>
              <div css={introBox}>
                <div>
                  <Headline>{t('StageSection.Hello')}</Headline>
                  <p css={introText}>{t('StageSection.Intro')}</p>
                  <SocialLinkList
                    css={css`
                      margin-top: 1rem;
                    `}
                  ></SocialLinkList>
                </div>
              </div>
            </GridItem>
            <GridItem>
              {/*<nav>*/}
              {/*  <ul>*/}
              {/*    <li>Home</li>*/}
              {/*    <li>Projects</li>*/}
              {/*  </ul>*/}
              {/*</nav>*/}
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
      <DevelopmentSection />
      <ClientsPartners />

      <Button>Contact</Button>
      <Button primary>Contact</Button>

      {/*<InternalLink to="/projects/">*/}
      {/*  {t('Page.Index.ProjectsCTALabel')}*/}
      {/*</InternalLink>*/}
    </Layout>
  )
}
