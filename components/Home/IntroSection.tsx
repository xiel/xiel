import { css } from '@emotion/react'
import { rgba } from 'polished'
import React from 'react'
import { Trans } from 'react-i18next'

import Headline from '../../atoms/Typo/Headline'
import { XTheme } from '../../styles/theme'
import { GridItem, GridRow } from '../Layout/Grid'
import Section from '../Layout/Section'
import Spacer from '../Layout/Spacer'
import { TriangleSpacer } from './Technologies/Technologies'

const sectionCSS = (theme: XTheme) => css`
  background: ${theme.background};
  background: linear-gradient(
    to bottom,
    ${rgba(theme.background, 0.7)},
    ${theme.background}
  );
`

export default function IntroSection() {
  return (
    <Section css={sectionCSS}>
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <Headline level="h2" component="p">
            <Trans i18nKey={'Intro.Title'} />
          </Headline>
          <Spacer />
          <p>
            <Trans i18nKey={'Intro.Text'} />
          </p>
        </GridItem>
      </GridRow>
      <TriangleSpacer />
    </Section>
  )
}
