import React, { useMemo } from 'react'
import loadable from '@loadable/component'
import { css } from '@emotion/core'
import VisuallyHidden from './VisuallyHidden'

export interface Props extends React.HTMLAttributes<any> {
  name: string
  title?: string
}

const icon = css`
  fill: currentColor;
`

export default function Icon({ name, title, ...restProps }: Props) {
  const IconSVG = useMemo(
    () =>
      loadable(() =>
        import(`../assets/svg/icons/${name}.svg`)
      ) as React.FunctionComponent<React.HTMLAttributes<any>>,
    [name]
  )

  return (
    <>
      <IconSVG aria-hidden={!!title} title={title} css={icon} {...restProps} />
      {title ? <VisuallyHidden>{title}</VisuallyHidden> : null}
    </>
  )
}
