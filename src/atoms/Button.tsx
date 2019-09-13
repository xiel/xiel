import React from 'react'
import InternalLink, { Props as InternalLinkProps } from './InternalLink'
import styled from '@emotion/styled'
import { Theme } from '../styles/theme'

type InnerButtonProps =
  | AnchorProps
  | JSX.IntrinsicElements['button']
  | InternalLinkProps

interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string
}

interface Props {
  primary?: boolean
}

export default styled(Button)<Props, Theme>`
  position: relative;
  display: inline-block;
  line-height: 3;
  text-transform: uppercase;
  padding: 0 1.5em;
  font-weight: 700;
  color: ${(props) => props.theme.link};
  transition: 400ms;

  &:before,
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: inherit;
  }

  &:before {
    border: 4px solid ${(props) => props.theme.link};
    opacity: 0.1;
  }

  &:after {
    background: ${({
      theme,
    }) => `linear-gradient(to right, ${theme.link} 4px, transparent 4px),
      linear-gradient(to bottom, ${theme.link} 4px, transparent 4px),
      linear-gradient(to left, ${theme.link} 4px, transparent 4px),
      linear-gradient(to bottom, ${theme.link} 4px, transparent 4px),
      linear-gradient(to left, ${theme.link} 4px, transparent 4px),
      linear-gradient(to top, ${theme.link} 4px, transparent 4px),
      linear-gradient(to right, ${theme.link} 4px, transparent 4px),
      linear-gradient(to top, ${theme.link} 4px, transparent 4px)`};
    background-size: 10px 10px;
    background-position: top left, top left, top right, top right, bottom right,
      bottom right, bottom left, bottom left;
    background-repeat: no-repeat;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.link};

    &:before {
      transform: translate(4px, 4px);
      opacity: 0.3;
    }

    &:after {
      transform: scale(1.1);
      opacity: 0;
    }
  }
`

function Button({ primary: _, ...props }: Props & InnerButtonProps) {
  if ('to' in props) {
    return <InternalLink {...props} />
  }
  if ('href' in props) {
    // eslint-disable-next-line react-app/jsx-a11y/anchor-has-content
    return <a {...props} />
  }
  return <button type="button" {...props} />
}
