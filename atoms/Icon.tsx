import { css } from '@emotion/react'
import React, { forwardRef, SVGProps } from 'react'

import * as Icons from '../components/SVG/icons'
import VisuallyHidden from './VisuallyHidden'

export interface Props extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: string
  title?: string
}

const icon = css`
  fill: currentColor;
`

export default forwardRef<SVGSVGElement, Props>(function Icon(
  { name, title, ...restProps },
  ref
) {
  const [firstLetter, ...restLetters] = Array.from(name)
  const componentName = (firstLetter.toUpperCase() +
    restLetters.join('')) as keyof typeof Icons
  const IconComponent = Icons[componentName]

  if (!IconComponent) return null

  return (
    <>
      <IconComponent
        {...restProps}
        ref={ref}
        css={icon}
        aria-hidden={!!title}
      />
      {title ? <VisuallyHidden>{title}</VisuallyHidden> : null}
    </>
  )
})
