import i18n from './src/locales/i18n'

export const wrapPageElement = ({ element, props }) => {
  i18n.changeLanguage(props.pageContext.lng)
  return element
}
