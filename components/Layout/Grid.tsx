import { css } from '@emotion/react'
import React, { createContext, useContext } from 'react'

type IElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type ColValue = number | 'auto'
type ColValues = ColValue[]

/*
 * - VStack - gapWidth, align
 * - HStack - gapWidth, align
 * - Container Query Helper
 */

interface IContext {
  columns: number // or per MQ
  gap: number
  gapUnit: string
  maxWidth: number
  maxWidthVW: number
}

const gridContextDefault = {
  maxWidth: 1440,
  maxWidthVW: 100,
  columns: 12,
  gap: 1.6,
  gapUnit: 'rem',
}

const GridCtx = createContext<IContext>(gridContextDefault)
export const useGrid = () => useContext(GridCtx)

const GridItemRowCtx = createContext({
  isInCol: false,
  isInRow: false,
  availableCols: [] as number[],
})
const useItemRowContext = () => useContext(GridItemRowCtx)
const { Provider: GridContextProvider } = GridCtx

interface IGridContextProps extends Partial<IContext> {
  children: React.ReactNode
}

export function GridContext({ children, ...value }: IGridContextProps) {
  const gridContextCurrent = useGrid()
  return (
    <GridContextProvider
      value={{
        ...gridContextDefault,
        ...gridContextCurrent,
        ...value,
      }}
    >
      {children}
    </GridContextProvider>
  )
}

interface IGridRowProps extends IElementProps {
  justify?: 'flex-start' | 'center' | 'flex-end'
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
  wrap?: 'wrap' | 'nowrap'
  component?: React.ElementType
}

export function GridRow({
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'wrap',
  component: Component = 'div',
  ...restProps
}: IGridRowProps) {
  const { columns, gap, gapUnit, maxWidth, maxWidthVW } = useGrid()
  const { isInCol, availableCols } = useItemRowContext()
  const base = css`
    display: flex;
    flex-wrap: wrap;
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
    flex: 1 0;
    width: ${isInCol
      ? 'auto'
      : maxWidthVW + 'vw'}; // new (is to big when nested)
    max-width: ${maxWidth}px;
    margin: 0 ${isInCol ? gap / -2 + gapUnit : 'auto'};
  `

  return (
    <GridItemRowCtx.Provider
      value={{
        isInCol: false,
        isInRow: true,
        availableCols: availableCols.length ? availableCols : [columns],
      }}
    >
      <Component css={[base]} {...restProps} />
    </GridItemRowCtx.Provider>
  )
}

interface IGridItemProps extends IElementProps {
  col?: ColValue | ColValues
  children?: React.ReactNode
  component?: React.ElementType
}

const breakpoints = [0, 576, 768, 992, 1200]
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

const calcColForMQ = (colValue: ColValue, availableCols: number) => {
  const colCount = colValue === 'auto' ? 0 : colValue
  const isColPropRelative = colCount < 1
  return isColPropRelative
    ? Math.max(0, Math.floor(colCount * availableCols))
    : Math.min(availableCols, Math.round(colCount))
}

const getValueForIndexOrClosestLower = (
  values: number[],
  index: number
): number => {
  const val = values[index]
  if (val !== undefined) {
    return val
  } else if (index >= 1) {
    return getValueForIndexOrClosestLower(values, index - 1)
  }
  return 0
}

export function GridItem({
  col: colProp = 'auto',
  component: Component = 'div',
  ...restProps
}: IGridItemProps) {
  const { gap, gapUnit, maxWidth, maxWidthVW, columns } = useGrid()
  const { availableCols } = useItemRowContext()
  const colValues = Array.isArray(colProp) ? colProp : [colProp]
  const colForMQs = colValues.map((colValue, i) =>
    calcColForMQ(colValue, getValueForIndexOrClosestLower(availableCols, i))
  )

  const getCSS = (col: number, mqIndex: number) => {
    if (col) {
      const colCSS = css`
        width: ${(col / columns) * maxWidthVW}vw;
        max-width: ${(col / columns) * maxWidth}px;
      `

      return breakpoints[mqIndex]
        ? css`
            ${mq[mqIndex]} {
              ${colCSS}
            }
          `
        : colCSS
    }
    return css`
      flex: 1;
    `
  }

  const cssBase = css`
    flex: 0 0 auto;
    padding: 0 ${gap / 2 + gapUnit};
  `

  const colCSS = colForMQs.map(getCSS)

  return (
    <GridItemRowCtx.Provider
      value={{
        isInCol: true,
        isInRow: false,
        availableCols: colForMQs,
      }}
    >
      <Component css={[cssBase, ...colCSS]} {...restProps} />
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
