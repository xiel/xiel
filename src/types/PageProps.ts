import React from 'react'
import { RouteComponentProps } from '@reach/router'

export interface PageProps<
  AdditionalContext = {},
  PageData = Record<string, unknown> | undefined
> extends Omit<RouteComponentProps, 'default'> {
  '*'?: string
  children: React.ReactNode
  data: PageData
  pageResources: PageResources
  pageContext: DefaultContext & AdditionalContext
  pathContext?: DefaultContext & AdditionalContext
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

export interface DefaultContext extends Record<string, unknown> {
  isCreatedByStatefulCreatePages: boolean
}
