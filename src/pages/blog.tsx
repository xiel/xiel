import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

interface Props {}

export default function Blog(props: Props) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam
        consectetur debitis deleniti dolor dolorem, explicabo harum id laborum maxime, modi
        perspiciatis provident quia quibusdam sapiente sunt unde voluptates.
      </p>
    </Layout>
  )
}
