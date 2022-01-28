import { ForwardedRef, useImperativeHandle, useRef, useState } from 'react'

export function useSharedRef<T>(forwardedRef: ForwardedRef<T>) {
  const ref = useRef<T>(null)
  useImperativeHandle<T | null, T | null>(forwardedRef, () => ref.current, [])
  return ref
}

export function useSharedCallbackRef<T>(forwardedRef: ForwardedRef<T>) {
  const [ref, setRef] = useState<T | null>(null)
  useImperativeHandle<T | null, T | null>(forwardedRef, () => ref, [ref])
  return [ref, setRef] as const
}
