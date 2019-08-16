import React from 'react'
import Section from '../Layout/Section'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import { colorTextBright, screenXs } from '../../styles/theme'
import { GridItem, GridRow } from '../Layout/Grid'
import StageHero from './StageHero'

interface Props {}

export default function StageSection(props: Props) {
  const { t } = useTranslation()

  return (
    <Section
      css={css`
        position: relative;
        overflow: hidden;
        height: 33vw;
        max-height: 50vh;
        background: #d2d2ce;
      `}
    >
      <StageHero />
      <GridRow
        justify="center"
        css={css`
          height: 100%;
        `}
      >
        <GridItem col={[12, 12, 12, 10]}>
          <GridRow>
            <GridItem col={[8, 8, 5]}>
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
                  <ul>
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
    </Section>
  )
}
