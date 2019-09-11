import { createContext } from 'react'
import { IPageContext } from '../types/GlobalTypes'

const defaultPageContext: IPageContext = {
  lng: '',
  lngBasePath: '',
  lngAlternates: {},
}

export const PageContext = createContext(defaultPageContext)
export const PageContextProvider = PageContext.Provider
