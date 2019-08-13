import React from 'react'
import { css, Global } from '@emotion/core'
import { colorTextDefault, contentContainerMax, screenSmMin } from './theme'
// stylesheets
import 'normalize.css'
import './reset.css'
import './fonts.css'

export default function BaseStyles() {
  return (
    <Global
      styles={css`
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
                (100vw - ${screenSmMin}px) /
                  (${contentContainerMax} - ${screenSmMin})
              )
          );

          @media (min-width: ${contentContainerMax}px) {
            font-size: 125%;
          }
        }

        h1,
        h2,
        h3 {
          font-family: 'Fira Code';
        }

        body {
          position: relative;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          color: ${colorTextDefault};
          background: #fff;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 200;
        }
      `}
    />
  )
}
