import React from 'react'
import { css } from '@emotion/core'

interface Props {}

const image = css`
  @keyframes zoom-in-2 {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  animation: zoom-in-2 20s;
  transform-origin: 50% 50%;
`

const mask = css`
  @keyframes zoom-out {
    from {
      transform: scale(2);
    }
    to {
      transform: scale(0.5);
    }
  }

  animation: zoom-out 15s;
  transform-origin: 50% 50%;
`

const maskedImage = css`
  @keyframes zoom-in {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(2);
      //opacity: 0;
    }
  }

  animation: zoom-in 30s;
  transform-origin: 50% 50%;
`

export default function HeavySVGStage(props: Props) {
  return (
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
        css={image}
      />
      <mask id="logo-path-mask" fill="white">
        <use xlinkHref="#logo-path" css={mask} />
      </mask>
      {/*<use id="Mask" fill="#000000" fillRule="nonzero" xlinkHref="#path-1">*/}
      <image
        id="frontend-space"
        mask="url(#logo-path-mask)"
        x="0"
        y="0"
        width="3754"
        height="1970"
        css={maskedImage}
        xlinkHref="http://192.168.178.22:8000/static/c766772eeb38e61e85727bf499ee9924/883ab/frontend-space.jpg"
      />
    </svg>
  )
}
