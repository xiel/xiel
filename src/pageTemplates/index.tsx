import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import CorePrinciples from '../components/Home/CorePrinciples'
import StageSection from '../components/Home/StageSection'
import ClientsPartners from '../components/Home/ClientsPartners'
import { css } from '@emotion/core'
import { GridItem, GridRow } from '../components/Layout/Grid'
import Button from '../atoms/Button'
import SocialLinkList from '../atoms/SocialLinkList'
import Headline from '../atoms/Typo/Headline'
import Portrait from '../components/Home/Portrait'
import IntroSection from '../components/Home/IntroSection'
import Technologies from '../components/Home/Technologies'

const introBox = css`
  position: relative;
  white-space: nowrap;
  background: hsla(216, 32%, 9%, 0.9);
  background: linear-gradient(
    to bottom,
    hsla(314, 100%, 9%, 0.9),
    hsla(205, 90%, 10%, 1)
  );
  background: linear-gradient(
    to bottom left,
    hsla(202, 100%, 18%, 0.9),
    hsl(174, 100%, 17%)
  );
  background: linear-gradient(
    45deg,
    hsla(206, 37%, 25%, 0.75),
    hsla(206, 24%, 13%, 0.75)
  );

  padding: 1.4rem 2rem;
  border-radius: 1.6rem;
  box-shadow: 0 1rem 2rem -0.5rem #000;

  @media (min-width: 500px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

const introBoxInner = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`

const introTextCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 500px) {
    text-align: left;
    align-items: flex-start;
  }
`

const introText = css`
  color: hsla(0, 0%, 100%, 0.5);
`

const avatarCSS = css`
  align-self: center;
  flex: 1 0 auto;
  width: 7rem;
  max-width: 150px;
  border-radius: 1rem;
  box-shadow: black 0 0.25rem 1.6rem -0.6rem;
  margin: 0 0 1.6em 0;

  @media (min-width: 500px) {
    margin: 0 1.6rem 0 -1%;
  }
`

export default function Index(props: PageProps) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <StageSection />
      <GridRow justify="center">
        <GridItem col={[12, 12, 12]}>
          <GridRow>
            <GridItem col={[12]}>
              <div
                css={css`
                  position: relative;
                `}
              >
                <div css={introBox}>
                  <div css={introBoxInner}>
                    <Portrait css={avatarCSS} />
                    <div css={introTextCSS}>
                      <Headline>{t('StageSection.Hello')}</Headline>
                      <p css={introText}>{t('StageSection.Intro')}</p>
                      <SocialLinkList
                        css={css`
                          margin-top: 1rem;
                        `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>

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
