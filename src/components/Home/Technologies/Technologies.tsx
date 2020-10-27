import React from 'react'
import Section from '../../Layout/Section'
import { GridItem, GridRow } from '../../Layout/Grid'
import Headline from '../../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Trans, useTranslation } from 'react-i18next'
import Spacer from '../../Layout/Spacer'
import TechTeaser from './TechTeaser'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'
import styled from '@emotion/styled'

interface Props {}

const sectionCSS = css`
  background: #eee;
  color: #000;
  z-index: 1;
`

const triangleTop = (theme: Theme) => css`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 7vmin;
  fill: #eee;
  transform: translateY(-100%);
`

const triangle = (theme: Theme) => css`
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

export default function Technologies(props: Props) {
  const { t } = useTranslation()
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
        <TechTeaser label={'TypeScript / ES6'} iconName="tech-typescript" />
        <TechTeaser label={'React (Native)'} iconName="tech-react" />
        <TechTeaser label={'HTML5'} iconName="tech-html5" />
        <TechTeaser label={'CSS3 + SASS'} iconName="tech-sass" />
        <TechTeaser label={'NodeJS'} iconName="tech-nodejs" />
        <TechTeaser label={'GraphQL'} iconName="tech-graphql" />
      </GridRow>
      <TriangleSpacer />
      <Triangle css={triangle} />
    </Section>
  )
}
