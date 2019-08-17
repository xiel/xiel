import React from 'react'
import InternalLink, { Props as InternalLinkProps } from './InternalLink'
import styled from '@emotion/styled'

type InnerButtonProps =
  | React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  | InternalLinkProps

interface Props {
  primary?: boolean
}

export default styled(Button)`
  border-radius: 1rem;
  padding: 0.25em 1em;
  text-transform: uppercase;
  background: ${(props) => (props.primary ? 'cyan' : 'transparent')};
  color: ${(props) => (props.primary ? '#111' : 'cyan')};
  border: 2px solid cyan;
`

function Button({ primary: _, ...props }: Props & InnerButtonProps) {
  if ('to' in props) {
    return <InternalLink {...props} />
  }
  return <button type="button" {...props} />
}
