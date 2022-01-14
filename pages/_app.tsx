import 'normalize.css'
import '../styles/reset.css'
import '../styles/embla.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { I18nextProvider } from 'react-i18next'

import { getI18n } from '../locales/i18n'
import ThemeProvider from '../styles/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const i18n = getI18n(router.locale!)

  if (i18n.language !== router.locale) {
    void i18n.changeLanguage(router.locale)
  }

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default MyApp
