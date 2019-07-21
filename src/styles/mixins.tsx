import { css } from '@emotion/core'

export const buttonReset = css`
  display: inline-flex;
  border: 0;
  margin: 0;
  padding: 0;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  font: inherit;
  text-align: inherit;
  background: transparent;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`

export const hidden = css`
  display: none !important;
  visibility: hidden;
`

export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &.focusable:active,
  &.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }
`
