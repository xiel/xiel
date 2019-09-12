import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Header from '../Header/Header'
import BasesStyles from '../../styles/BaseStyles'
import FooterSection from '../Footer/FooterSection'
import GridOverlay from './GridOverlay'

interface Props {
  children: React.ReactNode
  headerFixed?: boolean
}

const Layout = ({ children, headerFixed }: Props) => {
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
        render={(data) => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} fixed={headerFixed} />
            <main>{children}</main>
            <FooterSection />
            <GridOverlay />
          </>
        )}
      />
    </>
  )
}

export default Layout
