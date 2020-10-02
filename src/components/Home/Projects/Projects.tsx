import React from 'react'
import Section from '../../Layout/Section'
import { GridItem, GridRow } from '../../Layout/Grid'
import Headline from '../../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Trans, useTranslation } from 'react-i18next'
import Spacer from '../../Layout/Spacer'
import OpenSourceProjectTeaser from './OpenSourceProjectTeaser'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'

interface Props {}

const sectionCSS = css`
  background: linear-gradient(180deg, #222d35, #26262c);
  color: #eee;
  z-index: 1;
  padding-top: 7rem;
`

const triangleTop = (theme: Theme) => css`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 3.5vmin;
  fill: #222d35;
  transform: translateY(-100%) scaleX(-1);
`

const triangle = (theme: Theme) => css`
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 7vmin;
  fill: #26262c;
  transform: translateY(100%) scale(-1);
`

export default function Projects(props: Props) {
  const { t } = useTranslation()
  return (
    <Section css={sectionCSS}>
      <Triangle css={triangleTop} />
      <GridRow justify="center">
        <GridItem col={[12, 10]}>
          <Headline level="h2" line>
            <Trans i18nKey={'OpenSource.Title'} />
          </Headline>
          <Spacer />
          <p>
            <Trans i18nKey={'OpenSource.Text'} />
          </p>
          <Spacer />
          <GridRow component="ul">
            <OpenSourceProjectTeaser label={'TypeScript / ES6'} iconName="tech-typescript" />
            <OpenSourceProjectTeaser label={'React (Native)'} iconName="tech-react" />
            <OpenSourceProjectTeaser label={'React (Native)'} iconName="tech-react" />
            <OpenSourceProjectTeaser label={'React (Native)'} iconName="tech-react" />
          </GridRow>
        </GridItem>
      </GridRow>
      <Triangle css={triangle} />
    </Section>
  )
}
