import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import * as defaultTheme from './theme'
import { Theme } from './theme'

interface Props {
  theme?: Theme | ((parent: Theme) => Theme)
  children?: React.ReactNode
}

export default function ThemeProvider({
  theme = defaultTheme,
  ...restProps
}: Props) {
  return <EmotionThemeProvider theme={theme} {...restProps} />
}
