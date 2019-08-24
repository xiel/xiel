import React from 'react'
import Icon, { Props as IconProps } from './Icon'
import { css } from '@emotion/core'

const textIcon = css`
  display: inline-block;
  height: 1em;
  width: auto;
  margin-bottom: -0.125em;
`

interface Props extends IconProps {}

export default function TextIcon(props: Props) {
  return <Icon css={textIcon} {...props} />
}
