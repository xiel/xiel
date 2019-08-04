import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import ProjectTeaser from '../components/ProjectTeaser'
import { ProjectsQuery } from '../graphqlTypes'
import { FluidObject } from 'gatsby-image'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'
import { useQueryState } from 'use-location-state'

export default function Projects({ navigate }: PageProps) {
  const [count, setCount] = useQueryState('count', 0)
  const { t } = useTranslation()

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
                fluid(maxWidth: 300) {
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
      <SEO title={t('Projects.Title')} />
      <h1>Hi from the second page asdasd</h1>
      <p>Welcome to page 2</p>
      <div>
        <button onClick={() => setCount(count + 1, { method: 'replace' })}>
          {count}
        </button>
      </div>
      <Link to="/">Go back to the homepage</Link>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects!.edges
          .map(edge => edge.node)
          .map((p, i) => (
            <ProjectTeaser
              key={p.slug + '-' + i}
              title={p.title}
              desc={p.desc}
              slug={p.slug}
              imageData={p.image!.childImageSharp!.fluid as FluidObject}
            />
          ))}
        {Array.from(new Array(count)).map((_, i) => (
          <ProjectTeaser key={i} title={`${i}`} desc={`${i}`} slug={`${i}`} />
        ))}
      </div>
    </Layout>
  )
}
