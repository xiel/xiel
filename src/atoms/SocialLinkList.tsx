import React from 'react'
import { css } from '@emotion/core'
import TextIcon from './TextIcon'

interface Props {}

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

export default function SocialLinkList(props: Props) {
  return (
    <ul css={list} {...props}>
      <li>
        <a href="http://twitter.com/xiel" css={link}>
          <TextIcon name={'twitter'} title={'Twitter'} />
        </a>
      </li>
      <li>
        <a href="http://github.com/xiel" css={link}>
          <TextIcon name={'github'} title={'Github'} />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/xiel" css={link}>
          <TextIcon name={'dribbble'} title={'Dribbble'} />
        </a>
      </li>
      <li>
        <a href="http://instagram.com/xiel" css={link}>
          <TextIcon name={'instagram'} title={'Instagram'} />
        </a>
      </li>
    </ul>
  )
}
