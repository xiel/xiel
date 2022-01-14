import React, { HTMLAttributes } from 'react'

import { visuallyHidden } from '../styles/mixins'

export default function VisuallyHidden(props: HTMLAttributes<HTMLSpanElement>) {
  return <span css={visuallyHidden} {...props} />
}
