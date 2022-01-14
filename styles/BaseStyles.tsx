import { css, Global } from '@emotion/react'
import React from 'react'

// import * as theme from './theme'
import { XTheme } from './theme'

const globalCss = (theme: XTheme) => css`
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
    line-height: 1.5;

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
