// Optional Chaining in Typescript, you can use this to safely access nested properties
// ----------
// Usage:
// type TData = { foo: Optional<{ bar: Optional<number> }> }
// const data: TData = { foo: undefined }
// const num = optionalChain(() => data.foo!.bar)
type Optional<T> = T | undefined

export function optionalChain<T extends () => unknown>(
  getValue: T
): Optional<ReturnType<T>>
export function optionalChain(getValue: () => unknown) {
  let value
  try {
    value = getValue()
  } catch (e) {}
  return value
}
