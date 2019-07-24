import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import { css } from '@emotion/core'
import InternalLink from './InternalLink'

interface Props {
  title?: string
  slug?: string
  desc?: string
  imageData?: FluidObject
}

const teaser = css`
  color: hotpink;
`

export default function ProjectTeaser({ title, slug, desc, imageData }: Props) {
  return (
    <div css={teaser}>
      <InternalLink to={`/${slug}`}>
        {imageData && <Image fluid={imageData} alt=""></Image>}
      </InternalLink>
      <InternalLink to={`/${slug}`}>
        <h2>{title}</h2>
      </InternalLink>
      <p>{desc}</p>
    </div>
  )
}
