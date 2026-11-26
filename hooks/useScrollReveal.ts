import { useEffect } from 'react'

export const REVEAL_READY_CLASS = 'reveal-ready'

/**
 * Plays the reveal animation of every `[data-reveal]` element once it scrolls
 * into view. The element gets `data-revealed="animate"`, and the CSS from
 * `styles/motion.ts` then runs a time-based animation to its end, so the
 * element never stays half transparent.
 *
 * Elements that are already in view when the page loads get
 * `data-revealed="static"` and are shown without animation. Without
 * JavaScript, IntersectionObserver or with reduced motion, nothing is hidden.
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const root = document.documentElement
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ).filter((el) => !el.dataset.revealed)

    for (const el of elements) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.dataset.revealed = 'static'
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.dataset.revealed = 'animate'
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    for (const el of elements) {
      if (!el.dataset.revealed) observer.observe(el)
    }
    root.classList.add(REVEAL_READY_CLASS)

    return () => {
      observer.disconnect()
      root.classList.remove(REVEAL_READY_CLASS)
    }
  }, [])
}
