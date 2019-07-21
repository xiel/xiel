import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import StageImage from '../components/StageImage'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <StageImage />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

    <Link to="/projects/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
