import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Icon from '../../atoms/Icon'
import Headline from '../../atoms/Typo/Headline'
import { css } from '@emotion/core'

interface Props {}

const teaserText = css`
  line-height: 1.5;

  p {
    margin: 1.5em 0;
  }
`

const sectionCSS = css`
  background: #000;
  background: linear-gradient(to bottom right, #171e24, #220d25);
  color: #000;
  background: #eee;
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
              //font-family: 'Fira Code', monospace;
              color: #000;
            `}
            line
          >
            {`Technologien`}
          </Headline>
          <div css={teaserText}>
            <p>
              Ich bin auf die FrontEnd Entwicklung von Webseiten mit modernen
              Webstandards spezialisiert, dabei setze ich unter anderem folgende
              Technologien ein:
            </p>
          </div>
        </GridItem>
      </GridRow>
      <GridRow justify="center" component="ul">
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-es5'} css={iconCSS} />
          <h5 css={techLabel}>JavaScript / ES6</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-react'} css={iconCSS} />
          <h5 css={techLabel}>React + React Native</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-html5'} css={iconCSS} />
          <h5 css={techLabel}>HTML5 & CSS3</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-sass'} css={iconCSS} />
          <h5 css={techLabel}>SASS / SCSS</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-nodejs'} css={iconCSS} />
          <h5 css={techLabel}>NodeJS</h5>
        </GridItem>
        <GridItem col={[6, 6, 2]} component="li" css={techTeaserCSS}>
          <Icon name={'tech-webpack'} css={iconCSS} />
          <h5 css={techLabel}>Webpack / Jest</h5>
        </GridItem>
      </GridRow>
    </Section>
  )
}
