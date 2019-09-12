import i18n from './src/locales/i18n'
import React from 'react'
import { PageContextProvider } from './src/Providers/PageContext'
import { PageProps } from './src/types/PageProps'
import { IPageContext } from './src/types/GlobalTypes'
import ThemeProvider from './src/styles/ThemeProvider'

export const wrapPageElement = ({
  element,
  props,
}: {
  element: React.ReactNode
  props: PageProps<IPageContext>
}) => {
  const { pageContext, ...pageProps } = props
  i18n.changeLanguage(pageContext.lng || i18n.language || 'en')

  return (
    <ThemeProvider>
      <PageContextProvider value={{ ...pageContext, ...pageProps }}>{element}</PageContextProvider>
    </ThemeProvider>
  )
}
