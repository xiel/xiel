import React from "react"
import { PageProps } from "../types/PageProps"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { ProjectPageWithQuery } from "../graphqlTypes"
import Image, { FluidObject } from "gatsby-image"
import { useTranslation } from "react-i18next"

interface Props {}

interface PageContext {
  slug: string
}

export const query = graphql`
  query ProjectPageWith($slug: String!) {
    projectJson(slug: { eq: $slug }) {
      title
      desc
      image {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default function Project(
  props: Props & PageProps<PageContext, ProjectPageWithQuery>
) {
  const { pageContext } = props
  const { title, desc, image } = props.data.projectJson!
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>i18n {t("Welcome to React")}</h1>
      <h1>i18n {t("Subline")}</h1>
      <h1>
        Project Page {title} {pageContext.slug}
      </h1>
      <p>{desc}</p>
      {image && image.childImageSharp && image.childImageSharp.fluid && (
        <Image
          fluid={image.childImageSharp.fluid as FluidObject}
          alt=""
        ></Image>
      )}
      <Link to="/projects/">Back to all projects</Link>
    </Layout>
  )
}
