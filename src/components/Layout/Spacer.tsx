import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const spacer = (props: Props) => css`
  width: ${props.size}rem;
  height: ${props.size}rem;
`

interface Props {
  size: 1 | 2 | 3
}

export default styled.div<Props>`
  ${spacer}
`
