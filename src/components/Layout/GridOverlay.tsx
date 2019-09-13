import React, { useEffect, useState } from 'react'
import { GridItem, GridRow, useGrid } from './Grid'
import { css } from '@emotion/core'

interface Props {}

function GridOverlay(props: Props) {
  const { columns } = useGrid()

  const [showGrid, setShowGrid] = useState(
    () => sessionStorage.getItem('overlayActive') === 'true' || false
  )
  const toggleGrid = () => setShowGrid((prev) => !prev)

  useEffect(() => {
    const pressHandler = ({ key, ctrlKey }: KeyboardEvent) => {
      if (key && key === 'l' && ctrlKey) {
        toggleGrid()
      }
    }
    document.addEventListener('keypress', pressHandler)
    return () => document.removeEventListener('keypress', pressHandler)
  }, [])

  useEffect(() => sessionStorage.setItem('overlayActive', `${showGrid}`), [
    showGrid,
  ])

  return showGrid ? (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      `}
    >
      <GridRow
        css={css`
          height: 100%;
        `}
      >
        {Array.from(new Array(columns)).map((_, i) => (
          <GridItem
            col={1}
            key={i}
            css={css`
              height: 100%;
              background: rgba(255, 105, 180, 0.1);
            `}
          >
            <div
              css={css`
                height: 100%;
                background: rgba(255, 105, 180, 0.1);
                border: solid cyan;
                border-width: 0 1px;
              `}
            />
          </GridItem>
        ))}
      </GridRow>
    </div>
  ) : null
}

export default process.env.NODE_ENV === 'development' ? GridOverlay : () => null
