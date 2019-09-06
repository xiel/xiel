import React from 'react'
import { css } from '@emotion/core'
import StageImage from './StageImage'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'

interface Props {}

const triangle = (theme: Theme) => css`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 15%;
  fill: ${theme.background};
  transform: scaleX(-1);
`

export default function StageHero(props: Props) {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 0;
        right: 0;
        top: 0;
        width: 100%;
        opacity: 1;

        img {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          transform: translateY(0px);
          backface-visibility: hidden;
        }
      `}
    >
      <StageImage
        css={css`
          height: 100%;
        `}
      />
      <Triangle css={triangle} />
    </div>
  )
}
