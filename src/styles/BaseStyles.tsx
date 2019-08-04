import React from 'react'
import { Global, css } from '@emotion/core'
import {
  colorTextDefault,
  screenMdMax,
  screenSmMax,
  screenXsMax,
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
          font-size: 62.5%;

          @media (max-width: ${screenMdMax}px) {
            font-size: 60%;
          }

          @media (max-width: ${screenSmMax}px) {
            font-size: 55%;
          }

          @media (max-width: ${screenXsMax}px) {
            font-size: 51%;

            input,
            textarea {
              font-size: 16px;
            }
          }
        }

        body {
          position: relative;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          color: ${colorTextDefault};
          background: #fff;
          font-size: 1.7rem;
          line-height: 1.4;
          font-weight: 200;
        }
      `}
    />
  )
}
