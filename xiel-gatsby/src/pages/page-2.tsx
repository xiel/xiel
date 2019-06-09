import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/ProjectPreview"

interface Props {}

export default function SecondPage(props: Props) {
  const { allProjectJson } = useStaticQuery(graphql`
    {
      allProjectJson {
        edges {
          node {
            title
            desc
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>

      {allProjectJson.edges
        .map(edge => edge.node)
        .map((p, i) => (
          <ProjectPreview
            key={p.slug + "-" + i}
            title={p.title}
            desc={p.desc}
            slug={p.slug}
            imageData={p.image.childImageSharp.fluid}
          />
        ))}
    </Layout>
  )
}
