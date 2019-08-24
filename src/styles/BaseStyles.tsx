import React from 'react'
import { css, Global } from '@emotion/core'
import { colorTextDefault, contentContainerMax, screenSmMin } from './theme'
// normal stylesheets
import 'normalize.css'
import './reset.css'
import './fonts.css'

const globalCss = css`
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
        ((100vw - ${screenSmMin}px) / (${contentContainerMax} - ${screenSmMin}))
    );

    @media (min-width: ${contentContainerMax}px) {
      font-size: 125%;
    }
  }

  body {
    position: relative;
    font-family: Inter, 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    color: ${colorTextDefault};
    background: hsla(260, 20%, 7%, 1);
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 400;
  }
`

export default function BaseStyles() {
  return <Global styles={globalCss} />
}
