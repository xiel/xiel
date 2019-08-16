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
import { colorTextBright, screenXs } from '../styles/theme'

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
            <GridItem
              col={[8, 8, 5]}
              css={css`
                position: relative;
                background: red;
                padding-top: 2rem;
                padding-bottom: 2rem;
                transform: translateY(-50%);
              `}
            >
              <svg
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 10%;
                  fill: red;
                  transform: translateY(-99%) scaleX(-1);
                `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 72"
                preserveAspectRatio="none"
              >
                <path fillRule="evenodd" d="M1024 0L0 72h1024z" />
              </svg>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 100%;

                  @media (max-width: ${screenXs}) {
                    padding-bottom: 30%;
                  }
                `}
              >
                <div>
                  <p>
                    <em
                      css={css`
                        position: relative;
                        display: block;
                        margin: 0 0 0.33em;
                        font-size: 2rem;
                        line-height: 0.9;
                        letter-spacing: -0.03em;
                        font-weight: 500;
                        color: ${colorTextBright};
                        z-index: 1;
                      `}
                    >
                      {t('StageSection.Hello')}
                    </em>
                    {t('StageSection.Intro')}
                  </p>
                  <ul
                    css={css`
                      display: inline-flex;
                    `}
                  >
                    <li>
                      <a href="http://twitter.com/xiel">Twitter</a>
                    </li>
                    <li>
                      <a href="http://github.com/xiel">Github</a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/xiel">Dribbble</a>
                    </li>
                    <li>
                      <a href="http://instagram.com/xiel">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
      <DevelopmentSection />
      <ClientsPartners />

      {/*<InternalLink to="/projects/">*/}
      {/*  {t('Page.Index.ProjectsCTALabel')}*/}
      {/*</InternalLink>*/}
    </Layout>
  )
}
