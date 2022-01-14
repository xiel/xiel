import { css } from '@emotion/react'
import React from 'react'

import { XTheme } from '../../styles/theme'

const heading = css`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  line-height: 1.3;
  letter-spacing: -0.03em;
  font-weight: 500;
`

export const headlineCSS = {
  h1: (_theme: XTheme) => css`
    ${heading};
    color: #fff;
    font-size: 2.2rem;
    font-weight: 600;
  `,
  h2: (_theme: XTheme) => css`
    ${heading};
    color: #fff;
    font-size: 2rem;
  `,
  h3: (_theme: XTheme) => css`
    ${heading};
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.4;
  `,
  h4: (_theme: XTheme) => css`
    ${heading};
    font-size: 1rem;
    line-height: 1.4;
  `,
}

const lineStyle = css`
  &::before {
    display: block;
    content: '';
    margin-bottom: 0.3em;
    width: 3em;
    height: 0.15em;
    border-radius: 1em;
    background: hsla(257, 45%, 41%, 1);
    background: linear-gradient(
      to right,
      hsl(293, 42%, 42%),
      hsla(257, 45%, 41%, 1)
    );
  }
`

interface Props extends React.HTMLAttributes<unknown> {
  level?: keyof typeof headlineCSS
  component?: React.ComponentType | React.ElementType
  line?: boolean
}

export default function Headline({
  level = 'h1',
  component,
  line,
  ...restProps
}: Props) {
  const Component = component || level
  const levelStyles = headlineCSS[level]

  return (
    <Component
      css={(theme) => [levelStyles(theme), line && lineStyle]}
      {...restProps}
    />
  )
}
