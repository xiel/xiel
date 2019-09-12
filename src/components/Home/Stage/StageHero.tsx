import React from 'react'
import { css } from '@emotion/core'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'
import StageImage from './StageImage'

interface Props {}

export const imageWrapper = css`
  @keyframes stage-hero-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: 5s stage-hero-fade-in;

  @media (min-width: 400px) {
    transform: translateY(-20vw);
  }
`

export const stage = css`
  position: relative;
  min-height: 250px;

  @media (min-width: 400px) {
    height: 50vw;
    max-height: calc(100vh - 50px);
  }
`

const triangle = (theme: Theme) => css`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 15%;
  fill: hsla(259, 10%, 11%, 0.8);
  transform: scaleX(-1);
`

export default function StageHero({  }: Props) {
  return (
    <div css={stage}>
      <div
        css={(theme: Theme) => css`
          position: fixed;
          bottom: 0;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
          background: #010008;

          @keyframes stage-hero-zoom {
            from {
              transform: scale(0.85);
            }
            to {
              transform: scale(1);
            }
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            transform: scale(0.95);
            backface-visibility: hidden;
            animation: 30s stage-hero-zoom both;
          }
        `}
      >
        <StageImage css={imageWrapper} />
      </div>
      <Triangle css={triangle} />
    </div>
  )
}
