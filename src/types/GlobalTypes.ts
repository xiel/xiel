import Img from 'gatsby-image'

export interface PageLocaleConfig {
  lngBasePath: string
  lng: string
}

export interface IPageContext extends PageLocaleConfig {
  lngAlternates: Record<string, string>
}

export type GatsbyImageProps = typeof Img.prototype.props
