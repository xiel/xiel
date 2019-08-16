import React from 'react'
import Section from '../Layout/Section'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import StageHero from './StageHero'

interface Props {}

export default function StageSection(props: Props) {
  const { t } = useTranslation()

  return (
    <Section
      css={css`
        position: relative;
        overflow: hidden;
        height: 33vw;
        max-height: 50vh;
        background: #d2d2ce;
      `}
    >
      <StageHero />
    </Section>
  )
}
