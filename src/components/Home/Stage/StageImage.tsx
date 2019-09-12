import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { GatsbyImageProps } from '../../../types/GlobalTypes'

export default function StageImage(props: GatsbyImageProps) {
  const data = useStaticQuery(graphql`
    query StageImage {
      placeholderImage: file(relativePath: { eq: "stage/frontend-space-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
}
