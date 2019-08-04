import i18n from './src/locales/i18n'
import React from 'react'
import { PageContextProvider } from './src/Providers/PageContext'
import { PageProps } from './src/types/PageProps'
import { PageLocaleConfig } from './src/types/GlobalTypes'

export const wrapPageElement = ({
  element,
  props,
}: {
  element: React.ReactNode
  props: PageProps<PageLocaleConfig>
}) => {
  i18n.changeLanguage(props.pageContext.lng)

  return <PageContextProvider value={props.pageContext} children={element} />
}
