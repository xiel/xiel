/**
 * Layouts component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import Header from '../header/Header'
import 'normalize.css'
import '../../styles/reset.css'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div {...props}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
            <Link to="/impressum">Datenschutz & Impressum</Link>
          </footer>
        </div>
      )}
    />
  )
}

export default Layout
