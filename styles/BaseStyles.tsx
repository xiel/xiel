import { css, Global } from '@emotion/react'

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
    scroll-behavior: smooth;
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
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont,
      sans-serif;
    min-height: 100vh;
    color: ${theme.secondaryLabel};
    background: ${theme.background};
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::selection {
    color: #041116;
    background: rgba(124, 226, 215, 0.9);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    display: block;
  }

  main {
    overflow: hidden;
    width: 100%;
  }
`

export default function BaseStyles() {
  return <Global styles={globalCss} />
}
