import React from 'react'
import { spaceTop } from '../../Layout/Spacer'
import { GridItem } from '../../Layout/Grid'
import { css } from '@emotion/core'
import Headline from '../../../atoms/Typo/Headline'

const techTeaser = () => css`
  padding: 2rem;
  border-radius: 2rem;
  background: linear-gradient(180deg, hsl(0, 0%, 100%, 0.1), hsl(0, 0%, 100%, 0.05));
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
`

const iconCSS = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  margin: auto;
  width: 80%;
  height: 80%;
`

interface Props {
  label: React.ReactNode
  iconName: string
}

export default function OpenSourceProjectTeaser({ label, iconName }: Props) {
  return (
    <GridItem col={[4, 3, 2, 5]} component="li" css={spaceTop(2)}>
      <div css={techTeaser}>
        <Headline level="h3">{label}</Headline>
        <p>wheel gestures and momentum detection in the browser</p>
      </div>
    </GridItem>
  )
}
