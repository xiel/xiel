import { createContext, useContext } from 'react'
import { IPageContext } from '../types/GlobalTypes'
import { PageProps } from '../types/PageProps'

interface PageInfoContext extends IPageContext, Pick<PageProps, 'path'> {}

const defaultPageContext: PageInfoContext = {
  lng: '',
  lngBasePath: '',
}

export const PageContext = createContext(defaultPageContext)
export const PageContextProvider = PageContext.Provider
export const usePageContext = () => useContext(PageContext)
