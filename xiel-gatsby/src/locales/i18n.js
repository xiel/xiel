import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEn from "./en"
import translationDe from "./de"

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
    fallbackLng: "dev",
    initImmediate: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
