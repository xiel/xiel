import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from './en'
import translationDe from './de'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      de: {
        translation: translationDe,
      },
    },
    fallbackLng: 'en',
    returnEmptyString: false,
    initImmediate: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
