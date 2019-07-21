import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

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
      <Link to={`/${slug}`}>
        {imageData && <Image fluid={imageData} alt=""></Image>}
      </Link>
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{desc}</p>
    </div>
  )
}
