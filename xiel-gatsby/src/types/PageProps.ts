import React from "react"
import { RouteComponentProps } from "@reach/router"

// TODO: can navigate, "*" etc ever be undefined in Gatsby? maybe in SSR rendering phase?
export interface PageProps extends Omit<RouteComponentProps, "default"> {
  "*"?: string
  children: React.ReactNode
  data?: unknown
  pageResources: PageResources
  pageContext: PageContext
}

export interface PageResources extends Record<string, unknown> {
  component: React.ComponentType
  page: PageResourcesPageInfo
}

export interface PageResourcesPageInfo extends Record<string, unknown> {
  componentChunkName: string
  jsonName: string
  path: string
}

export interface PageContext extends Record<string, unknown> {
  isCreatedByStatefulCreatePages: boolean
}
