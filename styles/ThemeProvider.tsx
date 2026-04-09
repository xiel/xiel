import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import type { ReactNode } from 'react'

import * as defaultTheme from './theme'
import { XTheme } from './theme'

interface Props {
  theme?: XTheme | ((parent: XTheme) => XTheme)
  children: ReactNode
}

export default function ThemeProvider({
  theme = defaultTheme,
  children,
}: Props) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
