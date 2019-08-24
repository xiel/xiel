import React from 'react'
import { css } from '@emotion/core'

const heading = css`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 500;
`

const level = {
  h1: css`
    color: #fff;
    font-size: 2.2rem;
    font-weight: 700;
  `,
  h2: css`
    color: #fff;
    font-size: 1.9rem;
  `,
  h3: css`
    color: #fff;
    font-size: 1.4rem;
  `,
}

const lineStyle = css`
  &::before {
    display: block;
    content: '';
    margin-bottom: 0.3em;
    width: 3em;
    height: 2px;
    background: hsla(257, 45%, 41%, 1);
    background: linear-gradient(
      to right,
      hsl(293, 42%, 42%),
      hsla(257, 45%, 41%, 1)
    );
  }
`

interface Props extends React.HTMLAttributes<unknown> {
  lvl?: keyof typeof level
  component?: React.ComponentType | React.ElementType
  line?: boolean
}

export default function Headline({
  lvl = 'h1',
  component,
  line,
  ...restProps
}: Props) {
  const Component = component || lvl

  return (
    <Component
      css={[heading, level[lvl], line && lineStyle]}
      {...restProps}
    ></Component>
  )
}
