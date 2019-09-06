import { useEffect, useMemo, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import useLatest from './useLatest'

interface Props {
  domTarget?: Element | null
}

export type ContentRect = Omit<DOMRectReadOnly, 'toJSON'>

export default function useElementSize({ domTarget }: Props = {}) {
  const [ref, setRef] = useState(domTarget)
  const [rect, set] = useState<ContentRect>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0,
  })
  const updatePosCallback = useLatest(() => {
    if (!ref) return
    const boundingRect = ref.getBoundingClientRect()
    const { top, left, width, height } = boundingRect

    console.log(ref, Object.getOwnPropertyDescriptor(boundingRect, 'top'))

    setPosition(() => ({
      top,
      left,
      width,
      height,
      pageX: window.pageXOffset + boundingRect.left,
      pageY: window.pageYOffset + boundingRect.top,
    }))
  })
  const [position, setPosition] = useState<{ pageX: number; pageY: number }>()

  if (domTarget && ref !== domTarget) {
    setRef(domTarget)
  }

  const observer = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0]
        if (entry) {
          set(entry.contentRect)
          updatePosCallback.current()
        }
      }),
    [updatePosCallback]
  )

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
    position,
  }
}
