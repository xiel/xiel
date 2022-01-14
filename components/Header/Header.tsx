import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import Spacer from '../Layout/Spacer'
import Logo from './Logo'

interface Props extends HeaderElProps {
  siteTitle: string
}

interface HeaderElProps {
  fixed?: boolean
}

const HeaderEl = styled('header')<HeaderElProps>`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
`

const fixedHeader = css`
  position: absolute;
  z-index: 2;
`

const Header = ({ siteTitle = '', fixed }: Props) => {
  return (
    <HeaderEl css={fixed && fixedHeader}>
      <Logo siteTitle={siteTitle} />
      <Spacer />
      {/*<Nav />*/}
    </HeaderEl>
  )
}

export default Header
