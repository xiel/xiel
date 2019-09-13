import React from 'react'
import { css } from '@emotion/core'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'
import StageImage from './StageImage'
import { rgba } from 'polished'

export const image = css`
  @media (min-width: 400px) {
    transform: translateY(-20vw);
  }
`

const imageWrapper = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 200vh;
  opacity: 1;
  background: #010008;

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    backface-visibility: hidden;
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
  bottom: -0.49px; // anti-aliasing bug
  width: 100%;
  height: 15%;
  fill: ${rgba(theme.background, 0.7)};
  transform: scaleX(-1);
`

export default function StageHero() {
  return (
    <div css={stage}>
      <div css={imageWrapper}>
        <StageImage css={image} />
      </div>
      <Triangle css={triangle} />
    </div>
  )
}
