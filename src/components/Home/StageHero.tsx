import React from 'react'
import { css } from '@emotion/core'
import { screenSmMax, screenXs } from '../../styles/theme'
import StageImage from './StageImage'

interface Props {}

export default function StageHero(props: Props) {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        opacity: 1;

        @media (max-width: ${screenSmMax}px) {
          right: -5%;
        }

        @media (max-width: ${screenXs}px) {
          right: 0;
        }

        img {
          display: block;
          height: auto;
          width: 100%;
          margin: 0 auto;
          transform: translateY(0px);
          backface-visibility: hidden;

          @media (min-width: 2000px) {
            width: 90%;
          }
        }
      `}
    >
      <StageImage />
      <svg
        css={css`
          position: absolute;
          bottom: 0;
          fill: #111;
        `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 72"
      >
        <path fillRule="evenodd" d="M1024 0L0 72h1024z" />
      </svg>
    </div>
  )
}
