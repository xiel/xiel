import React from 'react'
import { css } from '@emotion/core'
import { colorTextBright } from '../../styles/theme'
import styled from '@emotion/styled'

const heading = css`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 700;
  line-height: 1.2;
`

const level = {
  h1: css`
    color: #fff;
    font-size: 2.2rem;
    letter-spacing: -0.03em;
  `,
}

interface Props extends React.HTMLAttributes<unknown> {
  lvl?: keyof typeof level
}

export default function Headline({ lvl = 'h1', ...restProps }: Props) {
  const Component = 'h1'

  return <Component css={[heading, level[lvl]]} {...restProps}></Component>
}
