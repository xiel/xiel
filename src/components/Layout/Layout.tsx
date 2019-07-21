import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import Header from '../Header/Header'
import 'normalize.css'
import '../../styles/reset.css'
import BasesStyles from '../../styles/BaseStyles'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <BasesStyles />
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
    </>
  )
}

export default Layout
