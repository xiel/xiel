import { css } from '@emotion/react'
import { HTMLAttributes } from 'react'

import TextIcon from './TextIcon'

const list = css`
  display: inline-grid;
  font-size: 1.3rem;
  column-gap: 0.5em;

  grid-auto-flow: column;
`

const link = css`
  color: hsla(215, 25%, 50%, 0.9);
  transition: color 400ms;

  &:hover,
  &:focus {
    color: hsla(215, 80%, 60%, 1);
  }
`

export default function SocialLinkList(
  props: HTMLAttributes<HTMLUListElement>
) {
  return (
    <ul css={list} {...props}>
      <li>
        <a
          href="https://twitter.com/xiel"
          css={link}
          target="_blank"
          rel="noreferrer"
        >
          <TextIcon name={'twitter'} title={'Twitter'} />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/xiel"
          css={link}
          target="_blank"
          rel="noreferrer"
        >
          <TextIcon name={'instagram'} title={'Instagram'} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/xiel"
          css={link}
          target="_blank"
          rel="noreferrer"
        >
          <TextIcon name={'github'} title={'Github'} />
        </a>
      </li>
    </ul>
  )
}
