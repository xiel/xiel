import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

type SpaceSize = 1 | 2 | 3

export const spaceTop = (size: SpaceSize = 1) => css`
  margin-top: ${size}rem;
`

const spacer = ({ size = 1 }: Props = {}) => css`
  width: ${size}rem;
  height: ${size}rem;
`

interface Props {
  size?: SpaceSize
}

export default styled.div<Props>`
  ${spacer}
`
