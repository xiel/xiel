import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { ActiveLink } from '../../atoms/ActiveLink'

const NavEl = styled.nav(css``)

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

const NavAnchor = styled.a`
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: 300ms;

  &:hover,
  &:focus,
  &.is-active {
    border-color: currentColor;
  }
`

export default function Nav() {
  return (
    <NavEl>
      <List>
        <Li>
          <ActiveLink href="/" activeClassName="is-active">
            <NavAnchor>Home</NavAnchor>
          </ActiveLink>
        </Li>
        <Li>
          <ActiveLink href="/blog" activeClassName="is-active">
            <NavAnchor>Blog</NavAnchor>
          </ActiveLink>
        </Li>
      </List>
    </NavEl>
  )
}
