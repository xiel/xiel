import React from 'react'
import { css, Global } from '@emotion/core'
import { Theme } from './theme'
// normal stylesheets
import 'normalize.css'
import './reset.css'
import './fonts.css'

const globalCss = (theme: Theme) => css`
  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-size: calc(
      100% + (20 - 16) *
        (
          (100vw - ${theme.screenSmMin}px) /
            (${theme.contentContainerMax} - ${theme.screenSmMin})
        )
    );

    @media (min-width: ${theme.contentContainerMax}px) {
      font-size: 125%;
    }
  }

  body {
    position: relative;
    font-family: Inter, 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    color: ${theme.secondaryLabel};
    background: ${theme.background};
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 300;
  }

  main {
    overflow: hidden;
    width: 100%;
  }
`

export default function BaseStyles() {
  return <Global styles={globalCss} />
}
