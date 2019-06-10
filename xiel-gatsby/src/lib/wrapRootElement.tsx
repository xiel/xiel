import React from "react"

// @ts-ignore
export default function wrapRootElement({ element }) {
  console.log(element)
  return <div>mega {element}</div>
}
