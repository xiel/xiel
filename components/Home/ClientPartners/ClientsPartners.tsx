import { css } from '@emotion/react'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import Button from '../../../atoms/Button'
import Headline from '../../../atoms/Typo/Headline'
import { XTheme } from '../../../styles/theme'
import { GridItem, GridRow } from '../../Layout/Grid'
import Section from '../../Layout/Section'
import Spacer from '../../Layout/Spacer'
import {
  Aperto,
  Bcgdv,
  Boffinhouse,
  Daimler,
  Lufthansa,
  Zdf,
} from '../../SVG/logos'
import { TriangleSpacer } from '../Technologies/Technologies'

const section = (theme: XTheme) => css`
  padding-bottom: 4rem;
  background: ${theme.background};
`

const logos = css`
  display: flex;
  flex-wrap: wrap;
  fill: #fff;

  li {
    display: flex;
    align-items: center;
    flex: 1 auto;
    width: 33.33%;
    margin: 10% 0;
  }

  svg {
    display: block;
    margin: auto;
    width: 60%;
    height: auto;
    max-height: 4rem;
    color: white;
  }

  svg,
  path {
    fill: currentColor;
  }
`

export default function ClientsPartners() {
  const { t } = useTranslation()

  return (
    <Section css={section}>
      <TriangleSpacer />
      <GridRow justify={'center'}>
        <GridItem col={[12, 10]}>
          <GridRow>
            <GridItem col={[12, 10, 1 / 2]}>
              <Headline level="h2" line>
                <Trans i18nKey={'ClientsPartners.Title'} />
              </Headline>
              <Spacer />
              <p>
                <Trans i18nKey={'ClientsPartners.Text'} />
              </p>
              <Spacer size={2} />
              <Headline level="h3">
                <Trans i18nKey={'Footer.Title'} />
              </Headline>
              <Spacer size={1} />
              <Button href={`mailto:${t('Footer.Email')}`}>
                {t('Footer.EmailLabel')}
              </Button>
              <Spacer size={2} />
            </GridItem>
            <GridItem col={[12, 10, 1 / 2]}>
              <ul css={logos}>
                <li>
                  <Boffinhouse />
                </li>
                <li>
                  <Bcgdv />
                </li>
                <li>
                  <Lufthansa />
                </li>
                <li>
                  <Daimler />
                </li>
                <li>
                  <Zdf />
                </li>
                <li>
                  <Aperto />
                </li>
              </ul>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
    </Section>
  )
}
