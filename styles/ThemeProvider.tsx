import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React from 'react'

import * as defaultTheme from './theme'
import { XTheme } from './theme'

interface Props {
  theme?: XTheme | ((parent: XTheme) => XTheme)
  children?: React.ReactNode
}

export default function ThemeProvider({
  theme = defaultTheme,
  ...restProps
}: Props) {
  return <EmotionThemeProvider theme={theme} {...restProps} />
}
