import { useEffect } from 'react'
import { PageProps } from '../types/PageProps'
import { IPageContext } from '../types/GlobalTypes'

interface Props extends Pick<PageProps<IPageContext>, 'navigate' | 'pageContext' | 'path'> {}

const STORAGE_KEY = 'enforcedRecommendedLanguageOnce'

export default function useEnforceRecommendedLanguageOnce({ navigate, pageContext, path }: Props) {
  useEffect(() => {
    const enforcedRecommendedLngPathOnce = localStorage.getItem(STORAGE_KEY)
    const { lngAlternates } = pageContext

    if (enforcedRecommendedLngPathOnce || !navigate || !path || !lngAlternates) {
      return
    }

    const browserLanguage = window.navigator.language.split('-')[0] || ''
    const recommendedLngPath = lngAlternates[browserLanguage] || lngAlternates['en']

    localStorage.setItem(STORAGE_KEY, recommendedLngPath)

    if (recommendedLngPath !== path) {
      navigate(recommendedLngPath, { replace: true })
    }
  }, [navigate, pageContext, path])
}
