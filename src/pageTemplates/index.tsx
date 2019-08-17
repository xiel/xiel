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
import Icon from '../atoms/Icon'

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
            <GridItem col={[8, 8, 5]} css={css``}>
              <div
                css={css`
                  background: hsla(216, 32%, 9%, 0.9);
                  padding: 1.5rem;
                  border-radius: 0.5rem;
                  transform: translateY(-50%);
                  box-shadow: 0 1rem 2rem -0.5rem #000;
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

                    <code>ctrl + L</code>
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
            <GridItem>
              <Icon />
              <Button>Contact</Button>
              <Button primary>Contact</Button>
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
