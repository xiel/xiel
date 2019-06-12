import React from "react"
import Image, { FluidObject } from "gatsby-image"
import { Link } from "gatsby"

interface Props {
  title?: string
  slug?: string
  desc?: string
  imageData?: FluidObject
}

export default function ProjectTeaser({ title, slug, desc, imageData }: Props) {
  return (
    <div>
      <Link to={`/${slug}`}>
        <Image fluid={imageData} alt=""></Image>
      </Link>
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{desc}</p>
    </div>
  )
}
