import React from 'react'
import { css } from '@emotion/core'
import { headlineCSS } from './Headline'
import { Theme } from '../../styles/theme'

interface Props {
  children: React.ReactNode
}

const richtextCSS = (theme: Theme) => css`
  > *:first-child,
  > *:last-child {
    margin-top: 0;
  }

  h1 {
    ${headlineCSS.h1(theme)};
    margin: 2rem 0 1.5rem;
  }

  h2 {
    ${headlineCSS.h2(theme)};
    margin: 2rem 0 1.5rem;
  }

  h3 {
    ${headlineCSS.h3(theme)};
    margin: 2rem 0 1.5rem;
  }

  h4 {
    ${headlineCSS.h4(theme)};
    margin: 2rem 0 1.5rem;
  }

  p,
  ul,
  ol {
    margin: 1.5rem 0;
  }
`

export default function Richtext(props: Props) {
  return <div {...props} css={(theme) => [richtextCSS(theme)]} />
}
