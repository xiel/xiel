import React from 'react'
import Section from '../Layout/Section'
import { css } from '@emotion/core'
import StageHero from './StageHero'

interface Props {}

export default function StageSection(props: Props) {
  return (
    <Section
      css={css`
        position: relative;
        overflow: hidden;
        height: 30vh;
        background: #0b0b0b;

        @media (min-width: 500px) {
          height: 90vh;
        }
      `}
    >
      <StageHero />
    </Section>
  )
}
