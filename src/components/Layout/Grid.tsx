import React, { createContext, Props, useContext, useMemo } from 'react'
import { css } from '@emotion/core'

type IElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

/*
 * - columns: 12
 * TODO:
 * - maxWidth: default eg. 1280, or 100% / inherited from current col
 * - css: width: 50vw; max-width: 0.5 * 1280px
 * -
 * - GridItem
 * - fixed cols:
 * - col - default 100%, 3 col = 3 / 12 col in current GridContext
 *
 * - relative cols:
 * - col: 1/2 (all fractions below 1 will be seen as relative cols in current nested context)
 * - col: { mq1: 2/6, mq2:  }
 *
 * - nesting cols GridItem > GridRow > GridItem does not create a new GridContext
 *
 * - VStack - gapWidth, align
 * - HStack - gapWidth, align
 * - Container Query Helper
 */

interface IContext {
  columns: number // or per MQ
  gap: number
  maxWidth: number
}

const GridCtx = createContext<IContext>({
  maxWidth: 1440,
  columns: 12,
  gap: 32,
})
const useGrid = () => useContext(GridCtx)

const GridItemRowCtx = createContext({
  isInCol: false,
  isInRow: false,
  availableCols: 0,
})
const useItemRowContext = () => useContext(GridItemRowCtx)
const { Provider: GridContextProvider } = GridCtx

interface IGridContextProps extends IContext {
  children: React.ReactNode
}

export function GridContext({ children, ...value }: IGridContextProps) {
  return <GridContextProvider value={value} />
}

export function GridRow(props: IElementProps) {
  const { columns, gap, maxWidth } = useGrid()
  const { isInCol, availableCols } = useItemRowContext()
  const base = css`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    flex: 1 0;
    max-width: ${maxWidth}px;
    margin: 0 ${isInCol ? gap / -2 + 'px' : 'auto'};
    font-family: 'Fira Code', monospace;
  `

  return (
    <GridItemRowCtx.Provider
      value={{
        isInCol: false,
        isInRow: true,
        availableCols: availableCols || columns,
      }}
    >
      <div css={[base]} {...props} />
    </GridItemRowCtx.Provider>
  )
}

interface IGridItemProps {
  col?: number | 'auto'
  children: React.ReactNode
}

export function GridItem({
  col: colProp = 'auto',
  children,
  ...restProps
}: IGridItemProps) {
  const { gap, maxWidth, columns } = useGrid()
  const { isInRow, availableCols } = useItemRowContext()
  const colCount = colProp === 'auto' ? 0 : colProp
  const isColPropRelative = colCount < 1
  const col = isColPropRelative
    ? Math.max(0, Math.floor(colCount * availableCols))
    : Math.min(availableCols, Math.round(colCount))

  const cssBase = css`
    padding: 0 ${gap / 2}px;
    background: rgba(0, 255, 255, 0.33);
  `

  const cssCol = css`
    width: ${(col / columns) * 100}vw;
    max-width: ${(col / columns) * maxWidth}px;
  `

  const cssColAuto = css`
    flex: 1;
  `

  if (!isInRow) {
    console.warn('GridItem can only be used within a GridRow', {
      col,
      children,
      ...restProps,
    })
    return null
  }

  return (
    <GridItemRowCtx.Provider
      value={{
        isInCol: true,
        isInRow: false,
        availableCols: col,
      }}
    >
      <div css={[cssBase, col ? cssCol : cssColAuto]} {...restProps}>
        <div
          css={css`
            height: 10vh;
            background: linear-gradient(
              to bottom,
              rgba(255, 105, 180, 0.33),
              rgba(50, 50, 50, 0.1)
            );
          `}
          children={children}
        />
      </div>
    </GridItemRowCtx.Provider>
  )
}

// gap, align
export function VStack() {
  return null
}

export function HStack() {
  return null
}

export function Stack() {
  return null
}
