import React from 'react'
import { css } from '@emotion/core'
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

export default function StageHero({  }: Props) {
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
          clippath: url(#logo-mask);
        }
      `}
    >
      {/*<StageImage*/}
      {/*  css={css`*/}
      {/*    height: 100%;*/}
      {/*  `}*/}
      {/*/>*/}
      {/*<svg*/}
      {/*  viewBox="0 0 500 500"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*  aria-hidden="true"*/}
      {/*>*/}
      {/*  <mask id="logo-mask" fill="#fff">*/}
      {/*    <path d="M500 82V0h-82v41h41v41h41zm-41 377h-41v41h82v-82h-41v41zM0 418v82h82v-41H41v-41H0zM41 82V41h41V0H0v82h41z" />*/}
      {/*    <path d="M340 105l-88 88-88-88-59 59 88 88-88 88 59 59 88-88 88 88 59-59-88-88 88-88-59-59z" />*/}
      {/*  </mask>*/}
      {/*  <g>*/}
      {/*    <image*/}
      {/*      xlinkHref="http://192.168.178.22:8000/static/c766772eeb38e61e85727bf499ee9924/883ab/frontend-space.jpg"*/}
      {/*      mask="url(#logo-mask)"*/}
      {/*      width="100%"*/}
      {/*      height="100%"*/}
      {/*    />*/}
      {/*  </g>*/}
      {/*</svg>*/}

      <svg
        width="3754px"
        height="1970px"
        viewBox="0 0 3754 1970"
        style={{ width: '100%', height: 'auto' }}
      >
        <defs>
          <path
            id="logo-path"
            d="M2329,672 L2255,672 L2255,598 L2181,598 L2181,524 L2329,524 L2329,672 Z M2255,1354 L2255,1280 L2329,1280 L2329,1428 L2181,1428 L2181,1354 L2255,1354 Z M1425,1280 L1499,1280 L1499,1354 L1573,1354 L1573,1428 L1425,1428 L1425,1280 Z M1499,672 L1425,672 L1425,524 L1573,524 L1573,598 L1499,598 L1499,672 Z M2040.2381,714 L2147,820.761905 L1987.7619,980 L2147,1139.2381 L2040.2381,1246 L1881,1086.7619 L1721.7619,1246 L1615,1139.2381 L1774.2381,980 L1615,820.761905 L1721.7619,714 L1881,873.238095 L2040.2381,714 Z"
          />
        </defs>
        <image
          x="0"
          y="0"
          width="3754"
          height="1970"
          xlinkHref="http://192.168.178.22:8000/static/c766772eeb38e61e85727bf499ee9924/883ab/frontend-space.jpg"
        />
        <mask id="logo-path-mask" fill="white">
          <use xlinkHref="#logo-path" />
        </mask>
        {/*<use id="Mask" fill="#000000" fillRule="nonzero" xlinkHref="#path-1">*/}
        <image
          id="frontend-space"
          mask="url(#logo-path-mask)"
          xlinkHref="http://192.168.178.22:8000/static/c766772eeb38e61e85727bf499ee9924/883ab/frontend-space.jpg"
          x="989"
          y="519"
          width="1776"
          height="932"
        />
      </svg>
      <Triangle css={triangle} />
    </div>
  )
}
