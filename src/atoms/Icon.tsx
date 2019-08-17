import React from 'react'

interface Props {}

export default function Icon(props: Props) {
  const IconSVG = React.useMemo(
    () => React.lazy(() => import('../assets/svg/icons/tech-es5.svg') as any),
    []
  )

  return <IconSVG />
}
