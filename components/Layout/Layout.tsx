import type { ReactNode } from 'react'

import useScrollReveal from '../../hooks/useScrollReveal'
import BasesStyles from '../../styles/BaseStyles'
import FooterSection from '../Footer/FooterSection'
import Header from '../Header/Header'
import GridOverlay from './GridOverlay'

interface Props {
  children: ReactNode
  headerFixed?: boolean
}

const Layout = ({ children, headerFixed }: Props) => {
  useScrollReveal()

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
