import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Header from '../Header/Header'
import BasesStyles from '../../styles/BaseStyles'
import FooterSection from '../Home/FooterSection'
import GridOverlay from './GridOverlay'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      {/*<GridContext gap={32}>*/}
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
            <FooterSection />
            <GridOverlay />
          </div>
        )}
      />
      {/*</GridContext>*/}
    </>
  )
}

export default Layout
