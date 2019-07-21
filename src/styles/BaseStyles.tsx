import React from 'react'
import { Global, css } from '@emotion/core'

export default function BaseStyles() {
  return (
    <Global
      styles={css`
        body {
          position: relative;
          font-family: 'Roboto', 'Helvetica Neue', sans-serif;
          background: #fff;
          font-size: 1.7rem;
          font-weight: 300;
        }
      `}
    />
  )
}
