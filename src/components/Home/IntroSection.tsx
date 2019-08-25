import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import { css } from '@emotion/core'
import { Theme } from '../../styles/theme'

const sectionCSS = (theme: Theme) => css`
  background: linear-gradient(to bottom, #111111, #1a242d);
  background: linear-gradient(to bottom, #111111, hsla(264, 9%, 5%, 1));
  background: linear-gradient(to bottom, #111111, ${theme.colorBlue});
`

interface Props {}

export default function IntroSection(props: Props) {
  return (
    <Section css={sectionCSS}>
      <GridRow justify={'center'}>
        <GridItem col={[12, 10]}>
          <p
            css={(theme) => css`
              color: #fff;
              background: ${theme.colorKey};
              line-height: 1.5;
              font-size: 1.4rem;
            `}
          >
            Leidenschaft für Design, Technologie und Innovation verbindet sich
            in all meinen Projekten, die ich gerne von der ersten Idee bis zur
            Veröffentlichung begleite. I am passionate about making open source
            software...
          </p>
        </GridItem>
      </GridRow>
    </Section>
  )
}
