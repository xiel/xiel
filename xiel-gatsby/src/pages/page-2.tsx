import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/ProjectPreview"
import { ProjectsQuery } from "../graphqlTypes"
import { FluidObject } from "gatsby-image"
import { PageProps } from "../types/PageProps"

interface Props {}

export default function SecondPage({ navigate }: Props & PageProps) {
  const [count, setCount] = useState(0)
  const { projects } = useStaticQuery<ProjectsQuery>(graphql`
    query Projects {
      projects: allProjectJson {
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

  useEffect(() => {
    console.log('navigate !!!!', navigate)
    navigate && navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page asdasd</h1>
      <p>Welcome to page 2</p>

      <div>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
      </div>

      <Link to="/">Go back to the homepage</Link>

      {projects!.edges
        .map(edge => edge.node)
        .map((p, i) => (
          <ProjectPreview
            key={p.slug + "-" + i}
            title={p.title}
            desc={p.desc}
            slug={p.slug}
            imageData={p.image!.childImageSharp!.fluid as FluidObject}
          />
        ))}
    </Layout>
  )
}
