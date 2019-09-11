import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface Props {}

const Li = styled.li(css`
  margin: 0 1em;
`)

export default function Nav(props: Props) {
  return (
    <nav
      css={css`
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 9;
      `}
    >
      <ul
        css={css`
          display: flex;
        `}
      >
        <Li>
          <Link to="/de">DE</Link>
        </Li>
        <Li>
          <Link to="/">EN</Link>
        </Li>
      </ul>
    </nav>
  )
}
