import React from 'react'

import useTracking from '../../hooks/useTracking'
import BasesStyles from '../../styles/BaseStyles'
import FooterSection from '../Footer/FooterSection'
import Header from '../Header/Header'
import GridOverlay from './GridOverlay'

interface Props {
  children: React.ReactNode
  headerFixed?: boolean
}

const Layout = ({ children, headerFixed }: Props) => {
  useTracking()
  return (
    <>
      <BasesStyles />
      <Header
        siteTitle="XIEL - Front End Development & Consultancy"
        fixed={headerFixed}
      />
      <main>{children}</main>
      <FooterSection />
      <GridOverlay />
    </>
  )
}

export default Layout
