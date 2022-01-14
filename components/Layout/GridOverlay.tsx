import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { useQueryState } from 'use-location-state'

import { GridItem, GridRow, useGrid } from './Grid'

function GridOverlay() {
  const { columns } = useGrid()
  const [showGrid, setShowGrid] = useQueryState('overlayActive', false)

  useEffect(() => {
    const toggleGrid = () => setShowGrid(!showGrid)
    const pressHandler = ({ key, ctrlKey }: KeyboardEvent) => {
      if (key && key === 'l' && ctrlKey) {
        toggleGrid()
      }
    }
    document.addEventListener('keypress', pressHandler)
    document.documentElement.addEventListener('dblclick', toggleGrid)

    return () => {
      document.removeEventListener('keypress', pressHandler)
      document.documentElement.removeEventListener('dblclick', toggleGrid)
    }
  }, [setShowGrid, showGrid])

  return showGrid ? (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 100;
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
