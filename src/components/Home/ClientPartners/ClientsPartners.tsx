import React from 'react'
import { GridItem, GridRow } from '../../Layout/Grid'
import Headline from '../../../atoms/Typo/Headline'
import Section from '../../Layout/Section'
import { Trans, useTranslation } from 'react-i18next'
import Boffinhouse from './logos/Boffinhouse.svg'
import BCGDV from './logos/BCGDV.svg'
import Lufthansa from './logos/Lufthansa.svg'
import ZDF from './logos/ZDF.svg'
import Daimler from './logos/Daimler.svg'
import Aperto from './logos/Aperto.svg'
import Spacer from '../../Layout/Spacer'
import { css } from '@emotion/core'
import Button from '../../../atoms/Button'

const section = css`
  padding-bottom: 4rem;
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
                  <BCGDV />
                </li>
                <li>
                  <Lufthansa />
                </li>
                <li>
                  <Daimler />
                </li>
                <li>
                  <ZDF />
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
