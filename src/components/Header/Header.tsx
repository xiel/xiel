import React from 'react'
import Logo from './Logo'
import styled from '@emotion/styled'
import Spacer from '../Layout/Spacer'
import { Theme } from '../../styles/theme'
import { css } from '@emotion/core'

interface Props extends HeaderElProps {
  siteTitle: string
}

interface HeaderElProps {
  fixed?: boolean
}

const HeaderEl = styled('header')<HeaderElProps, Theme>`
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
    </HeaderEl>
  )
}

export default Header
