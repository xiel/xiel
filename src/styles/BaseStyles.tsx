import React from 'react'
import { Global, css } from '@emotion/core'
import {
  colorTextDefault,
  contentContainerMax,
  screenSmMax,
  screenXsMax,
  screenXsMin,
} from './theme'
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
                (100vw - ${screenXsMin}px) /
                  (${contentContainerMax} - ${screenXsMin})
              )
          );

          @media (min-width: ${contentContainerMax}px) {
            font-size: 125%;
          }
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
