import { css } from '@emotion/react'
import Image from 'next/image'
import { rgba } from 'polished'
import React from 'react'

import stageImg from '../../../public/stage/deepspace-stage.jpg'
import { XTheme } from '../../../styles/theme'
import Triangle from '../../SVG/Triangle'

export const image = css`
  @media (min-width: 400px) {
    transform: translateY(-20vw);
  }
`

const imageWrapper = (_theme: XTheme) => css`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
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

const triangle = (theme: XTheme) => css`
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
        <Image
          src={stageImg}
          css={image}
          alt=""
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <Triangle css={triangle} />
    </div>
  )
}
