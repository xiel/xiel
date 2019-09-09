import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Headline from '../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Theme } from '../../styles/theme'
import { Trans } from 'react-i18next'
import Spacer from '../Layout/Spacer'

interface Props {}

const teaserText = css`
  //margin: 1.5em 0 0;
`

const sectionCSS = (theme: Theme) => css`
  background: ${theme.background};
`

export default function Intro(props: Props) {
  return (
    <Section css={sectionCSS}>
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <Headline level="h2" component="p">
            <Trans i18nKey={'Intro.Title'} />
          </Headline>
          <Spacer />
          <p css={teaserText}>
            <Trans i18nKey={'Intro.Text'} />
          </p>
        </GridItem>
      </GridRow>
    </Section>
  )
}
