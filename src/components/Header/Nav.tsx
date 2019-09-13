import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { usePageContext } from '../../Providers/PageContext'
import InternalLink from '../../atoms/InternalLink'
import { Theme } from '../../styles/theme'

interface Props {}

const NavEl = styled.nav(css`
  //position: absolute;
  //top: 1rem;
  //right: 1rem;
  //z-index: 9;
`)

const List = styled.ul(css`
  display: flex;
`)

const Li = styled.li(css`
  margin: 0 1em;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
`)

const NavLink = styled(Link)<any, Theme>`
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: 300ms;

  &:hover,
  &:focus,
  &.is-active {
    border-color: currentColor;
  }
`
const NavLinkInternal = NavLink.withComponent(InternalLink)

export default function Nav(props: Props) {
  const { path } = usePageContext()

  return (
    <NavEl>
      <List>
        <Li>
          <NavLinkInternal to="/" activeClassName="is-active">
            Home
          </NavLinkInternal>
        </Li>
        <Li>
          <NavLink to="/blog/" activeClassName="is-active">
            Blog
          </NavLink>
        </Li>
      </List>
    </NavEl>
  )
}
