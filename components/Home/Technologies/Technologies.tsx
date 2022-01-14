import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Trans } from 'react-i18next'

import Headline from '../../../atoms/Typo/Headline'
import { XTheme } from '../../../styles/theme'
import { GridItem, GridRow } from '../../Layout/Grid'
import Section from '../../Layout/Section'
import Spacer from '../../Layout/Spacer'
import Triangle from '../../SVG/Triangle'
import TechTeaser from './TechTeaser'

const sectionCSS = css`
  background: #eee;
  color: #000;
  z-index: 1;
`

const triangleTop = (_theme: XTheme) => css`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 7vmin;
  fill: #eee;
  transform: translateY(-100%);
`

const triangle = (_theme: XTheme) => css`
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 7vmin;
  fill: #eee;
  transform: translateY(100%) scale(-1);
`

export const TriangleSpacer = styled.div`
  height: 7vmin;
`

export default function Technologies() {
  return (
    <Section css={sectionCSS}>
      <Triangle css={triangleTop} />
      <GridRow justify="center">
        <GridItem col={[12, 10]}>
          <Headline
            level="h2"
            css={css`
              color: #000;
            `}
            line
          >
            <Trans i18nKey={'Technologies.Title'} />
          </Headline>
          <Spacer />
          <p>
            <Trans i18nKey={'Technologies.Text'} />
          </p>
        </GridItem>
      </GridRow>
      <Spacer />
      <GridRow justify="center" component="ul">
        <TechTeaser label={'TypeScript / ES6'} iconName="TechTypescript" />
        <TechTeaser label={'React (Native)'} iconName="TechReact" />
        <TechTeaser label={'HTML5'} iconName="TechHtml5" />
        <TechTeaser label={'CSS3 + SASS'} iconName="TechSass" />
        <TechTeaser label={'NodeJS'} iconName="TechNodejs" />
        <TechTeaser label={'GraphQL'} iconName="TechGraphql" />
      </GridRow>
      <TriangleSpacer />
      <Triangle css={triangle} />
    </Section>
  )
}
