import React, { useContext } from 'react'
import { GatsbyLinkProps, Link } from 'gatsby'
import { PageContext } from '../Providers/PageContext'
import { join } from 'path'

interface Props<TState> extends Omit<GatsbyLinkProps<any>, 'ref'> {
  prependWithLng?: boolean
}

export default function InternalLink<TState = unknown>({
  to: toProp,
  prependWithLng = true,
  ...rest
}: Props<TState>) {
  const { lngBasePath } = useContext(PageContext)
  let to = toProp

  if (lngBasePath && to.startsWith('/')) {
    to = join(lngBasePath, to)
  }

  return <Link to={to} {...rest} />
}
