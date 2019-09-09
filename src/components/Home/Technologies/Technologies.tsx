import React from 'react'
import Section from '../../Layout/Section'
import { GridItem, GridRow } from '../../Layout/Grid'
import Headline from '../../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Trans } from 'react-i18next'
import Spacer from '../../Layout/Spacer'
import TechTeaser from './TechTeaser'

interface Props {}

const sectionCSS = css`
  background: #eee;
  color: #000;
`

export default function Technologies(props: Props) {
  return (
    <Section css={sectionCSS}>
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
    </Section>
  )
}
