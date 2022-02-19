import { css } from '@emotion/react'

import { XTheme } from '../../../styles/theme'

export const introBox = (_theme: XTheme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  @media (min-width: 500px) {
    justify-content: start;
  }
`

export const introBoxInner = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`
export const introTextCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-shadow: 0 0.5em 0.6em rgba(0, 0, 0, 0.3);

  @media (min-width: 500px) {
    text-align: left;
    align-items: flex-start;
  }
`
export const introText = css`
  color: hsla(215, 25%, 54%, 1);
`

export const avatarCSS = css`
  align-self: center;
  flex: 1 0 auto;
  width: 7rem;
  max-width: 150px;
  box-shadow: black 0 0.25rem 1.6rem -0.6rem;
  margin: 0 0 1.6em 0;

  img {
    border-radius: 1rem;
  }

  @media (min-width: 500px) {
    margin: 0 1.6rem 0 0;
  }
`
