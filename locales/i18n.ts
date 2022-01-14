import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationDe from './de.json'
import translationEn from './en.json'

let initialized = false

export function getI18n(lng: string) {
  if (initialized) {
    return i18n
  }

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
      lng,
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

  initialized = true
  return i18n
}
