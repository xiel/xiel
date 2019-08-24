import Img from 'gatsby-image'

export interface PageLocaleConfig {
  lngBasePath: string
  lng: string
}

export type GatsbyImageProps = typeof Img.prototype.props
