import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'

const root = css`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`

const canvasCss = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

const haze = css`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.16), transparent 18%),
    radial-gradient(circle at 80% 18%, rgba(255, 204, 173, 0.12), transparent 20%),
    radial-gradient(circle at 56% 44%, rgba(113, 247, 233, 0.08), transparent 24%);
  mix-blend-mode: screen;
  opacity: 0.55;
`

const grain = css`
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.8) 0.5px, transparent 0.5px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0.5px, transparent 0.5px);
  background-size: 4px 4px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
`

export default function IridescentCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    let frameId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let pointerX = 0.5
    let pointerY = 0.4

    const blobs = [
      {
        x: 0.16,
        y: 0.2,
        radius: 0.34,
        speed: 0.00018,
        drift: 0.05,
        colors: [
          'rgba(188, 255, 246, 0.98)',
          'rgba(141, 204, 255, 0.68)',
          'rgba(136, 118, 255, 0.16)',
        ],
      },
      {
        x: 0.77,
        y: 0.22,
        radius: 0.3,
        speed: 0.00024,
        drift: 0.06,
        colors: [
          'rgba(255, 225, 210, 0.95)',
          'rgba(255, 170, 197, 0.52)',
          'rgba(255, 239, 184, 0.12)',
        ],
      },
      {
        x: 0.56,
        y: 0.62,
        radius: 0.38,
        speed: 0.00013,
        drift: 0.045,
        colors: [
          'rgba(165, 255, 247, 0.82)',
          'rgba(127, 181, 255, 0.4)',
          'rgba(255, 255, 255, 0.08)',
        ],
      },
    ]

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const handlePointer = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth
      pointerY = event.clientY / window.innerHeight
    }

    const drawBlob = (
      originX: number,
      originY: number,
      radius: number,
      colors: string[]
    ) => {
      const gradient = ctx.createRadialGradient(
        originX,
        originY,
        radius * 0.12,
        originX,
        originY,
        radius
      )
      gradient.addColorStop(0, colors[0])
      gradient.addColorStop(0.42, colors[1])
      gradient.addColorStop(1, colors[2])
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(originX, originY, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const render = (time: number) => {
      const normalizedTime = time
      ctx.clearRect(0, 0, width, height)

      const bg = ctx.createLinearGradient(0, 0, width, height)
      bg.addColorStop(0, 'rgba(7, 17, 24, 0.12)')
      bg.addColorStop(0.55, 'rgba(9, 18, 25, 0.02)')
      bg.addColorStop(1, 'rgba(12, 12, 22, 0.22)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.globalCompositeOperation = 'screen'

      blobs.forEach((blob, index) => {
        const travelX =
          Math.sin(normalizedTime * blob.speed + index * 1.7) * blob.drift
        const travelY =
          Math.cos(normalizedTime * blob.speed * 0.82 + index * 0.9) *
          blob.drift
        const parallaxX = (pointerX - 0.5) * 0.08
        const parallaxY = (pointerY - 0.5) * 0.08
        drawBlob(
          width * (blob.x + travelX + parallaxX),
          height * (blob.y + travelY + parallaxY),
          Math.min(width, height) * blob.radius,
          blob.colors
        )
      })

      ctx.restore()

      ctx.save()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)'
      ctx.lineWidth = 1.1
      ctx.beginPath()
      ctx.ellipse(
        width * 0.62,
        height * 0.56,
        width * 0.2,
        height * 0.16,
        Math.PI * 0.1,
        0,
        Math.PI * 2
      )
      ctx.stroke()

      ctx.strokeStyle = 'rgba(124, 226, 215, 0.18)'
      ctx.beginPath()
      ctx.ellipse(
        width * 0.34,
        height * 0.36,
        width * 0.22,
        height * 0.14,
        -Math.PI * 0.18,
        0,
        Math.PI * 2
      )
      ctx.stroke()
      ctx.restore()

      frameId = window.requestAnimationFrame(render)
    }

    resize()
    frameId = window.requestAnimationFrame(render)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointer, { passive: true })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointer)
    }
  }, [])

  return (
    <div css={root} aria-hidden="true">
      <canvas css={canvasCss} ref={canvasRef} />
      <div css={haze} />
      <div css={grain} />
    </div>
  )
}
