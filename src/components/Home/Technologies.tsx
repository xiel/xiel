import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Icon from '../../atoms/Icon'
import Headline from '../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Trans } from 'react-i18next'

interface Props {}

const teaserText = css`
  line-height: 1.5;

  p {
    margin: 1.5em 0;
  }
`

const sectionCSS = css`
  background: #eee;
  color: #000;
`

const techTeaserCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const techLabel = css`
  font-size: 0.75rem;
  font-family: 'Fira Code', monospace;
`

const iconCSS = css`
  margin: auto;
  width: auto;
  height: 5rem;
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
          <div css={teaserText}>
            <p>
              <Trans i18nKey={'Technologies.Text'} />
            </p>
          </div>
        </GridItem>
      </GridRow>
      <GridRow justify="center" component="ul">
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-typescript'} css={iconCSS} />
          <h5 css={techLabel}>TypeScript / ES6</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-react'} css={iconCSS} />
          <h5 css={techLabel}>React + React Native</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-html5'} css={iconCSS} />
          <h5 css={techLabel}>HTML5</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-sass'} css={iconCSS} />
          <h5 css={techLabel}>CSS3 + SASS</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-nodejs'} css={iconCSS} />
          <h5 css={techLabel}>NodeJS</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-graphql'} css={iconCSS} />
          <h5 css={techLabel}>GraphQL</h5>
        </GridItem>
      </GridRow>
    </Section>
  )
}
