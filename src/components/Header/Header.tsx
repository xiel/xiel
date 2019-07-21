import React from 'react'
import Logo from './Logo'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => {
  return <Logo siteTitle={siteTitle} />
}

export default Header
