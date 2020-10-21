import React from 'react'
import Spacer, { spaceTop } from '../../Layout/Spacer'
import { GridItem } from '../../Layout/Grid'
import { css } from '@emotion/core'
import Headline from '../../../atoms/Typo/Headline'

const techTeaser = () => css`
  padding: 2rem;
  height: 100%;
  border-radius: 2rem;
  background: linear-gradient(180deg, hsl(0, 0%, 100%, 0.1), hsl(0, 0%, 100%, 0.05));
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);

  a {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

interface Props {
  headline: React.ReactNode
  description: React.ReactNode
  href?: string
}

export default function OpenSourceProjectTeaser({ headline, description, href }: Props) {
  return (
    <GridItem col={[10, 8, 5, 3]} component="li" css={spaceTop(2)}>
      <div css={techTeaser}>
        <Headline level="h4">
          <a href={href}>{headline}</a>
        </Headline>
        <Spacer size={0.5} />
        <p>{description}</p>
      </div>
    </GridItem>
  )
}
