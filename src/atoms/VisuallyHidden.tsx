import React from 'react'
import { visuallyHidden } from '../styles/mixins'

interface Props {}

export default function VisuallyHidden(props: Props) {
  return <span css={visuallyHidden} {...props}></span>
}
