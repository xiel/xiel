import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import StageImage from '../components/StageImage'
import SEO from '../components/seo'
import { PageProps } from '../types/PageProps'
import { useTranslation } from 'react-i18next'

export default function Index(props: PageProps) {
  const { t } = useTranslation()
  console.log('Index', props)

  return (
    <Layout>
      <SEO />
      <StageImage />

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

      <Link to="/projects/">Go to page 2</Link>
    </Layout>
  )
}
