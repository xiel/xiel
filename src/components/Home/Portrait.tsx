import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { GatsbyImageProps } from '../../types/GlobalTypes'

export default function Portrait(props: GatsbyImageProps) {
  const { portrait } = useStaticQuery(graphql`
    query PortraitQuery {
      portrait: file(relativePath: { eq: "about/BGray Portrait Felix Leupold 2015_square.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={portrait.childImageSharp.fluid} {...props} />
}
