import { css } from '@emotion/react'
import { HTMLAttributes } from 'react'

import { liftOnHover } from '../styles/motion'
import { XTheme } from '../styles/theme'
import TextIcon from './TextIcon'

const list = css`
  display: inline-grid;
  font-size: 1.3rem;
  column-gap: 0.5em;

  grid-auto-flow: column;
`

const link = (theme: XTheme) => css`
  display: inline-block;
  color: ${theme.accent};
  transition: color 400ms;

  &:hover,
  &:focus {
    color: ${theme.accentHover};
  }
`

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/felix-leupold-berlin',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  { href: 'https://github.com/xiel', icon: 'github', title: 'GitHub' },
]

export default function SocialLinkList(
  props: HTMLAttributes<HTMLUListElement>,
) {
  return (
    <ul css={list} {...props}>
      {socialLinks.map(({ href, icon, title }) => (
        <li key={href}>
          <a
            href={href}
            css={[link, liftOnHover('-0.15em')]}
            target="_blank"
            rel="noreferrer"
          >
            <TextIcon name={icon} title={title} />
          </a>
        </li>
      ))}
    </ul>
  )
}
