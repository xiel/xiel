import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export default function StageImage() {
  const data = useStaticQuery(graphql`
    query StageImage {
      placeholderImage: file(relativePath: { eq: "stage/frontend-space.jpg" }) {
        childImageSharp {
          fluid(grayscale: true, maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
