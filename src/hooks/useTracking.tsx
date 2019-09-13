import { useEffect } from 'react'

export default function useTracking() {
  // piwik tracking
  useEffect(() => {
    // @ts-ignore
    const _paq = (window._paq = window._paq || [])
    _paq.push(['setDocumentTitle', document.domain + '/' + document.title])
    _paq.push(['trackPageView'])
    _paq.push(['enableLinkTracking'])

    const u = '//piwik.xiel.de/'
    _paq.push(['setTrackerUrl', u + 'matomo.php'])
    _paq.push(['setSiteId', '2'])

    const d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0]
    g.type = 'text/javascript'
    g.async = true
    g.defer = true
    g.src = u + 'matomo.js'
    // @ts-ignore
    s.parentNode.insertBefore(g, s)
  }, [])
}
