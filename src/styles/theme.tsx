// generate type from itself
export type Theme = typeof import('./theme')

// Colors
// export const colorKey = `#a7a8a3`
// export const colorKeyCyan = `${colorKey}`
// export const colorKeyCyanDark = `darken(${colorKeyCyan}, 10)`

// 	A text label that contains primary content.
export const label = '#fff'
// A text label that contains secondary content
export const secondaryLabel = 'hsla(264, 5%, 60%, 1)'

// A text label that contains tertiary content
export const tertiaryLabel = `hsla(253, 5%, 50%, 1)`

// A text label that contains quaternary content
export const quaternaryLabel = `hsla(215, 15%, 50%, 1)`

// Placeholder text in controls or text views
export const placeholderText = '#fff'

// A separator that allows some underlying content to be visible
export const separator = 'hsla(0, 0%, 100%, .07)'

// A separator that doesn't allow any underlying content to be visible
export const opaqueSeparator = '#fff'

// Text that functions as a link
export const link = '#fff'

// The color for the main background of your interface.
export const background = 'hsla(259, 10%, 11%, 1)'

// The color for content layered on top of the main background.
export const secondaryBackground = '#000'

// The color for content layered on top of secondary backgrounds.
export const tertiaryBackground = '#000'

// grid - RASTER
export const gridColumns = `12`
export const contentContainerMax = 1440

// //== Media queries breakpoints
export const screenXs = 400
export const screenSm = 650
export const screenMd = 990
export const screenLg = 1230

export const screenXsMin = screenXs
export const screenSmMin = screenSm
export const screenMdMin = screenMd
export const screenLgMin = screenLg

export const screenXsMax = screenSmMin - 1
export const screenSmMax = screenMdMin - 1
export const screenMdMax = screenLgMin - 1
