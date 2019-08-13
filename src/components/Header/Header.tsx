import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => {
  return (
    <header>
      <Logo siteTitle={siteTitle} />
      <Nav />
    </header>
  )
}

export default Header
