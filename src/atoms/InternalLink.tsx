import React from 'react'
import { GatsbyLinkProps, Link } from 'gatsby'
import { usePageContext } from '../Providers/PageContext'
import { join } from 'path'

export interface Props<TState = unknown> extends Omit<GatsbyLinkProps<any>, 'ref'> {
  prependWithLng?: boolean
}

export default function InternalLink<TState = unknown>({
  to: toProp,
  prependWithLng = true,
  ...rest
}: Props<TState>) {
  const { lngBasePath } = usePageContext()
  let to = toProp

  if (lngBasePath && to.startsWith('/')) {
    to = join(lngBasePath, to)
  }

  return <Link to={to} {...rest} />
}
