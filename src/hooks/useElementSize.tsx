import { useEffect, useMemo, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import useLatest from './useLatest'
import { debounce } from 'throttle-debounce'

interface Props {
  domTarget?: HTMLElement | null
}

const initialPagePos = { pageX: 0, pageY: 0, offsetHeight: 0, offsetWidth: 0 }
const initialRect = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  x: 0,
  y: 0,

  ...initialPagePos,
}

export default function useElementSize({ domTarget }: Props = {}) {
  const [ref, setRef] = useState(domTarget)
  const [rect, setRect] = useState(initialRect)
  const updatePosCallback = useLatest(() => {
    if (!ref) return initialPagePos
    const boundingRect = ref.getBoundingClientRect()
    return {
      offsetWidth: ref.offsetWidth,
      offsetHeight: ref.offsetHeight,
      pageX: window.pageXOffset + boundingRect.left,
      pageY: window.pageYOffset + boundingRect.top,
    }
  })

  if (domTarget && ref !== domTarget) {
    setRef(domTarget)
  }

  const observer = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0]
        if (!entry) return
        const contentRect = entry.contentRect
        // top left -> relative to viewport
        // page X / Y -> relative to document
        setRect({
          width: contentRect.width,
          height: contentRect.height,
          top: contentRect.top,
          left: contentRect.left,
          bottom: contentRect.bottom,
          right: contentRect.right,
          x: contentRect.x,
          y: contentRect.y,
          ...updatePosCallback.current(),
        })
      }),
    [updatePosCallback]
  )

  useEffect(() => {
    const resizeHandler = debounce(100, () => {
      setRect((currRect) => ({
        ...currRect,
        ...updatePosCallback.current(),
      }))
    })
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  useEffect(() => {
    if (!ref) return
    observer.observe(ref)
    return () => observer.disconnect()
  }, [observer, ref])

  return {
    ref: domTarget
      ? () =>
          console.warn(
            'no need to call ref, observing passed domTarget',
            domTarget
          )
      : setRef,
    rect,
  }
}
