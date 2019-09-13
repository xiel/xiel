import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { GatsbyImageProps } from '../../types/GlobalTypes'

export default function Portrait(props: GatsbyImageProps) {
  const { portrait } = useStaticQuery(graphql`
    query {
      #      portrait: file(relativePath: { eq: "about/portrait-felix-leupold.jpg" }) {
      portrait: file(
        #        relativePath: { eq: "about/portrait-felix-leupold-cutout.png" }

        relativePath: {
          eq: "about/BGray Portrait Felix Leupold 2015_square.jpg"
        }
      ) {
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
