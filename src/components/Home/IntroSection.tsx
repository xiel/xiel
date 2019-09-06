import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import { css } from '@emotion/core'
import { Theme } from '../../styles/theme'

const sectionCSS = (theme: Theme) => css`
  background: linear-gradient(to bottom, #111111, #1a242d);
  background: linear-gradient(to bottom, #111111, hsla(264, 9%, 5%, 1));
`

const introTextCSS = (theme: Theme) => css`
  line-height: 1.5;
  font-size: 1.4rem;
  font-weight: 400;

  em {
    float: left;
    font-size: 2em;
    line-height: 1;
  }
`

interface Props {}

export default function IntroSection(props: Props) {
  return (
    null && (
      <Section css={sectionCSS}>
        <GridRow justify={'center'}>
          <GridItem col={[12, 10]}>
            <p css={introTextCSS}>
              <em>Hey</em>
              Leidenschaft für Design, Technologie und Innovation verbindet sich
              in all meinen Projekten, die ich gerne von der ersten Idee bis zur
              Veröffentlichung begleite. I am passionate about making open
              source software...
            </p>
          </GridItem>
        </GridRow>
      </Section>
    )
  )
}
