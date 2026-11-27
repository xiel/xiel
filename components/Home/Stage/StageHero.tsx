import { css } from '@emotion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import stageImg from '../../../public/stage/deepspace-stage.jpg'
import { driftSlowly } from '../../../styles/motion'
import { XTheme } from '../../../styles/theme'

export const image = css`
  transform: translateY(-5vw);

  @media (min-width: 650px) {
    transform: translateY(-15vw);
  }
  @media (min-width: 990px) {
    transform: translateY(-20vw);
  }
  @media (min-width: 1230px) {
    transform: translateY(-25vw);
  }
`

const stageWrapper = (_theme: XTheme) => css`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #010008;

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    backface-visibility: hidden;
  }
`

const canvasCSS = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.6s ease-out;
`

const visible = css`
  opacity: 1;
`

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!canvas.getContext('webgl2') || !!canvas.getContext('webgl')
  } catch {
    return false
  }
}

/**
 * The fixed space backdrop. The photo renders first (and stays as the fallback
 * without WebGL); a slowly rotating 3D galaxy fades in over it once ready.
 */
export default function StageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [galaxyReady, setGalaxyReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !supportsWebGL()) return

    let cancelled = false
    let cleanup = () => {}

    import('./galaxyScene').then(({ createGalaxy }) => {
      if (cancelled) return
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const galaxy = createGalaxy(canvas, {
        reducedMotion,
        onReady: () => setGalaxyReady(true),
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

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  return (
    <div css={stageWrapper}>
      <div css={driftSlowly} aria-hidden={galaxyReady}>
        <Image
          src={stageImg}
          css={image}
          role="presentation"
          layout="responsive"
          placeholder="blur"
          alt=""
        />
      </div>
      <canvas
        ref={canvasRef}
        css={[canvasCSS, galaxyReady && visible]}
        aria-hidden
      />
    </div>
  )
}
