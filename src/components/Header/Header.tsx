import React, { useContext } from 'react'
import Logo from './Logo'
import { Link, PageRenderer } from 'gatsby'
import { css } from '@emotion/core'
import { PageContext } from '../../Providers/PageContext'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => {
  return (
    <header>
      <Logo siteTitle={siteTitle} />
      <nav
        css={css`
          position: absolute;
          z-index: 9;
        `}
      >
        <ul>
          <li>
            <Link to="/">DE</Link>
          </li>
          <li>
            <Link to="/en/">EN</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
