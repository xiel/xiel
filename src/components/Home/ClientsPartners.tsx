import React from 'react'
import { GridItem, GridRow } from '../Layout/Grid'
import Headline from '../../atoms/Typo/Headline'
import Section from '../Layout/Section'
import { css } from '@emotion/core'
import { Trans, useTranslation } from 'react-i18next'
import Spacer from '../Layout/Spacer'

interface Props {}

const teaserText = css`
  //line-height: 1.5;
  //
  //p {
  //  margin: 1.5em 0;
  //}
`

export default function ClientsPartners(props: Props) {
  const { t } = useTranslation()

  return (
    <Section>
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
              <a href={`mailto:${t('Footer.Email')}`}>{t('Footer.Email')}</a>
            </GridItem>
            <GridItem>
              <ul>
                <li>
                  Lufthansa, BCG, Aperto, Boffinhouse, ZDF, exozet, Daimler, EO
                </li>
              </ul>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
    </Section>
  )
}
