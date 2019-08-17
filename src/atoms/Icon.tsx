import React, { useMemo } from 'react'
import loadable from '@loadable/component'

interface Props {
  name: string
}

export default function Icon({ name }: Props) {
  const IconSVG = useMemo(
    () => loadable(() => import(`../assets/svg/icons/${name}.svg`)),
    [name]
  )

  return <IconSVG />
}
