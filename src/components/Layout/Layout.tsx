import React, { Suspense } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Header from '../Header/Header'
import BasesStyles from '../../styles/BaseStyles'
import FooterSection from '../Home/FooterSection'
import GridOverlay from './GridOverlay'

interface Props {
  children: React.ReactNode
}

// matchMedia('(prefers-color-scheme: light)')

const Layout = ({ children, ...props }: Props) => {
  return (
    <Suspense fallback={'loading'}>
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
          <div {...props}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <FooterSection />
            <GridOverlay />
          </div>
        )}
      />
    </Suspense>
  )
}

export default Layout
