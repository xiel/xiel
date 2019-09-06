import React from 'react'
import { css } from '@emotion/core'
import { Theme } from '../../styles/theme'

const heading = css`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 500;
`

const levelCSS = {
  h1: (theme: Theme) => css`
    color: #fff;
    font-size: 2.2rem;
    font-weight: 600;
  `,
  h2: (theme: Theme) => css`
    color: #fff;
    font-size: 2rem;
  `,
  h3: (theme: Theme) => css`
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
  level?: keyof typeof levelCSS
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
  const levelStyles = levelCSS[level]

  return (
    <Component
      css={(theme) => [heading, levelStyles(theme), line && lineStyle]}
      {...restProps}
    />
  )
}
