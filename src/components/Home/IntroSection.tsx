import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Headline from '../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Theme } from '../../styles/theme'
import { Trans } from 'react-i18next'
import Spacer from '../Layout/Spacer'
import { TriangleSpacer } from './Technologies/Technologies'
import { rgba } from 'polished'

interface Props {}

const sectionCSS = (theme: Theme) => css`
  background: ${theme.background};
  background: linear-gradient(to bottom, ${rgba(theme.background, 0.7)}, ${theme.background});
`

export default function IntroSection(props: Props) {
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
