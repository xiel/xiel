import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'

import stageImg from '../../../public/stage/deepspace-stage.jpg'
import { XTheme } from '../../../styles/theme'

export const image = css`
  transform: translateY(-5vw);

  @media (min-width: 650px) {
    transform: translateY(-15vw);
  }
  @media (min-width: 990px) {
    transform: translateY(-20vw);
  }
  @media (min-width: 1230px) {
    transform: translateY(-25vw);
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

export default function StageHero() {
  return (
    <div css={imageWrapper}>
      <Image
        src={stageImg}
        css={image}
        role="presentation"
        layout="responsive"
        placeholder="blur"
        alt=""
      />
    </div>
  )
}
