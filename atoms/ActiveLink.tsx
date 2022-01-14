import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { Children } from 'react'

interface Props extends LinkProps {
  children: React.ReactNode
  activeClassName?: string
  className?: string
}

export const ActiveLink = ({
  children,
  activeClassName = 'is-active',
  ...props
}: Props) => {
  const { asPath, locale } = useRouter()
  const child = Children.only(children) as React.ReactElement
  const childClassName = child.props.className || ''

  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const localeMatches = locale === props.locale || !props.locale

  const className =
    localeMatches && (asPath === props.href || asPath === props.as)
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link passHref {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}
