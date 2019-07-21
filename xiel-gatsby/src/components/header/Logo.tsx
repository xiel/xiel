import React from 'react'
import { css } from '@emotion/core'
import { visuallyhidden } from '../../styles/mixins'
import { screen_sm_max, screen_xs_max } from '../../styles/theme'

interface Props {
  siteTitle: string
}

const logo = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 9rem;
  height: 9rem;
  margin: 4.5rem auto 0;
  z-index: 9999;

  a {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  h1,
  svg {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  path {
    transform-origin: 250px 250px 0px;
    transition: 0ms;
    transform: rotate(0.0001deg);
  }

  &:hover {
    path.x {
      transition: 400ms cubic-bezier(0.62, 1.37, 0.52, 0.95);
      transition: 400ms;
      transform: rotate(90deg);
    }
  }

  &:active {
    path.x {
      transition: 100ms;
      transform: scale(0.95) rotate(90deg);
    }
  }

  @media (max-width: ${screen_sm_max}px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: ${screen_xs_max}px) {
    margin-top: 2rem;
    width: 6rem;
    height: 6rem;
    left: 2rem;
    right: auto;
  }
`

export default function Logo({ siteTitle }: Props) {
  return (
    <header css={logo}>
      <h1>
        <a href="/">
          <span css={visuallyhidden}>{siteTitle}</span>
        </a>
      </h1>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="#333" fillRule="evenodd">
          <path d="M500 82V0h-82v41h41v41h41zm-41 377h-41v41h82v-82h-41v41zM0 418v82h82v-41H41v-41H0zM41 82V41h41V0H0v82h41z" />
          <path
            className="x"
            d="M340 105l-88 88-88-88-59 59 88 88-88 88 59 59 88-88 88 88 59-59-88-88 88-88-59-59z"
          />
        </g>
      </svg>
    </header>
  )
}
