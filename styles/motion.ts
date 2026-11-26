import { css, keyframes } from '@emotion/react'

import { REVEAL_READY_CLASS } from '../hooks/useScrollReveal'

/**
 * Motion helpers. Every animation runs only when the visitor has not asked
 * for reduced motion. The headline underline draw needs the `data-reveal`
 * attribute on the element and `useScrollReveal()` on the page, which marks
 * elements as they scroll into view. Until that hook runs, nothing is hidden.
 */

export const easeOut = 'cubic-bezier(0.22, 1, 0.36, 1)'

const motionOK = '@media (prefers-reduced-motion: no-preference)'
const hidden = `.${REVEAL_READY_CLASS} &:not([data-revealed])`
const animate = `.${REVEAL_READY_CLASS} &[data-revealed='animate']`

const fadeUp = keyframes`
  from {
    opacity: 0;
    translate: 0 1.5rem;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
`

const drawLine = keyframes`
  from {
    scale: 0 1;
  }
  to {
    scale: 1 1;
  }
`

const breathe = keyframes`
  from {
    opacity: 0.55;
  }
  to {
    opacity: 1;
  }
`

const drift = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 1.08;
  }
`

/** Fade and slide up once, after `delayMs`, when the page loads. */
export const enter = (delayMs = 0) => css`
  ${motionOK} {
    animation: ${fadeUp} 900ms ${easeOut} ${delayMs}ms both;
  }
`

/**
 * Draws the headline underline (`::before`) from left to right once the
 * headline scrolls into view. Use together with the `data-reveal` attribute.
 */
export const drawUnderlineOnScroll = css`
  ${motionOK} {
    &::before {
      transform-origin: left center;
    }
    ${hidden}::before {
      scale: 0 1;
    }
    ${animate}::before {
      animation: ${drawLine} 900ms ${easeOut} 150ms both;
    }
  }
`

/** Slow, endless pulse for ambient glows. */
export const breatheSlowly = css`
  ${motionOK} {
    animation: ${breathe} 6s ease-in-out infinite alternate;
  }
`

/** Very slow zoom for the starfield. */
export const driftSlowly = css`
  ${motionOK} {
    animation: ${drift} 45s ease-in-out infinite alternate;
  }
`

/** Lift an element on hover or keyboard focus. */
export const liftOnHover = (distance = '-0.35rem') => css`
  ${motionOK} {
    transition:
      translate 300ms ${easeOut},
      box-shadow 300ms ${easeOut};

    &:hover,
    &:focus-within {
      translate: 0 ${distance};
    }
  }
`
