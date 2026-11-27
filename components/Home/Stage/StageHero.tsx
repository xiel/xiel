import { css } from '@emotion/react'
import { getImageProps } from 'next/image'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

import stageImg from '../../../public/stage/deepspace-stage.jpg'
import { driftSlowly } from '../../../styles/motion'
import { XTheme } from '../../../styles/theme'

const stageWrapper = (theme: XTheme) => css`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #010008;

  /* the photo fallback (no JavaScript or no WebGL) */
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
    backface-visibility: hidden;
    transform: translateY(-5vw);

    @media (min-width: ${theme.screenSm}px) {
      transform: translateY(-15vw);
    }
    @media (min-width: ${theme.screenMd}px) {
      transform: translateY(-20vw);
    }
    @media (min-width: ${theme.screenLg}px) {
      transform: translateY(-25vw);
    }
  }
`

const fadeIn = css`
  opacity: 0;
  transition: opacity 1.2s ease-out;
`

const visible = css`
  opacity: 1;
`

const canvasCSS = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

/**
 * Cheap WebGL check that does not keep a GPU context alive: three.js creates
 * its own context afterwards. The result is cached, because it cannot change.
 */
let webGLSupport: boolean | undefined
function supportsWebGL() {
  webGLSupport ??= detectWebGL()
  return webGLSupport
}
function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (!gl) return false
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return true
  } catch {
    return false
  }
}

// One responsive image description, shared by the <noscript> and the
// no-WebGL fallback, so both use the optimised srcset
const { props: stageImgProps } = getImageProps({
  src: stageImg,
  alt: '',
  sizes: '100vw',
})

const noSubscribe = () => () => {}
const unknownOnServer = () => null

/** `null` on the server and during hydration, then the real answer */
function useWebGLSupport() {
  return useSyncExternalStore(noSubscribe, supportsWebGL, unknownOnServer)
}

/**
 * The fixed space backdrop.
 *
 * - With WebGL, a slowly rotating 3D galaxy animates in. The photo is never
 *   requested.
 * - Without WebGL (or if three.js fails), the photo fades in instead.
 * - Without JavaScript, the photo renders from <noscript>.
 */
export default function StageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const webgl = useWebGLSupport()
  const [galaxyFailed, setGalaxyFailed] = useState(false)
  const [ready, setReady] = useState(false)
  const mode =
    webgl === null ? 'detecting' : webgl && !galaxyFailed ? 'galaxy' : 'image'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !webgl) return

    let cancelled = false
    let cleanup = () => {}

    import('./galaxyScene')
      .then(({ createGalaxy }) => {
        if (cancelled) return
        const reducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches
        const galaxy = createGalaxy(canvas, {
          reducedMotion,
          onReady: () => setReady(true),
        })

        // Stop rendering when the tab is hidden or the opaque sections below
        // the intro fully cover the backdrop
        let hidden = document.hidden
        let covered = false
        const update = () => galaxy.setPaused(hidden || covered)
        const onVisibility = () => {
          hidden = document.hidden
          update()
        }
        document.addEventListener('visibilitychange', onVisibility)

        const intro = document.querySelector('main section')
        const observer =
          intro && 'IntersectionObserver' in window
            ? new IntersectionObserver(([entry]) => {
                covered = !entry.isIntersecting
                update()
              })
            : null
        if (intro) observer?.observe(intro)

        cleanup = () => {
          observer?.disconnect()
          document.removeEventListener('visibilitychange', onVisibility)
          galaxy.dispose()
        }
      })
      .catch(() => {
        // the chunk failed to load or WebGL setup threw
        if (!cancelled) setGalaxyFailed(true)
      })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [webgl])

  return (
    <div css={stageWrapper}>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...stageImgProps} role="presentation" />
      </noscript>
      {mode === 'image' && (
        <div css={[driftSlowly, fadeIn, ready && visible]}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            {...stageImgProps}
            role="presentation"
            onLoad={() => setReady(true)}
          />
        </div>
      )}
      <canvas
        ref={canvasRef}
        css={[canvasCSS, fadeIn, mode === 'galaxy' && ready && visible]}
        aria-hidden
      />
    </div>
  )
}
