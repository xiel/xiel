import Img from 'gatsby-image'

export interface PageLocaleConfig {
  lngBasePath: string
  lng: string
}

export interface IPageContext extends PageLocaleConfig, Record<string, unknown> {
  lngAlternates?: Record<string, string>
}

export type GatsbyImageProps = typeof Img.prototype.props

type RequestIdleCallbackHandle = any
type RequestIdleCallbackOptions = {
  timeout: number
}
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean
  timeRemaining: () => number
}

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void
  }
}
