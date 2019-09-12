import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { GatsbyImageProps } from '../../../types/GlobalTypes'

export default function StageImage(props: GatsbyImageProps) {
  const data = useStaticQuery(graphql`
    query StageImage {
      placeholderImage: file(relativePath: { eq: "stage/frontend-space.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
}