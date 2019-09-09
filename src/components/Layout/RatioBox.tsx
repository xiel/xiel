import React, { useMemo } from 'react'
import { css } from '@emotion/core'

const ratioBox = css`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
`
const ratioBoxContent = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode
  ratio?: [number, number] | string // "number:number" string
  classNameInner?: string
}

export default function RatioBox({
  children,
  ratio = '1:1',
  className,
  classNameInner,
  ...restProps
}: Props) {
  const ratioArray = useMemo(
    () =>
      Array.isArray(ratio)
        ? ratio
        : ratio
            .trim()
            .split(':')
            .map(parseFloat),
    [ratio]
  )
  const [w, h] = ratioArray
  const paddingBottom = `${(h / w) * 100}%`

  return (
    <div
      css={ratioBox}
      style={{ paddingBottom }}
      className={className}
      {...restProps}
    >
      <div css={ratioBoxContent} className={classNameInner}>
        {children}
      </div>
    </div>
  )
}
