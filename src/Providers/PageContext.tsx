import { createContext } from 'react'
import { PageLocaleConfig } from '../types/GlobalTypes'

const defaultPageContext: PageLocaleConfig = {
  lng: '',
  lngBasePath: '',
}

export const PageContext = createContext(defaultPageContext)
export const PageContextProvider = PageContext.Provider
