// import '../../../styles/embla.css'

import { css } from '@emotion/react'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import Headline from '../../../atoms/Typo/Headline'
import { XTheme } from '../../../styles/theme'
import { GridItem, GridRow } from '../../Layout/Grid'
import Section from '../../Layout/Section'
import Spacer from '../../Layout/Spacer'
import { Triangle } from '../../SVG'
import OpenSourceProjectTeaser from './OpenSourceProjectTeaser'

const sectionCSS = css`
  color: #eee;
  z-index: 1;
  padding-top: 7rem;
  background: linear-gradient(180deg, #222d35, #26262c);
`

const triangleTop = (_theme: XTheme) => css`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 3.5vmin;
  fill: #222d35;
  transform: translateY(-100%) scaleX(-1);
`

const triangle = (_theme: XTheme) => css`
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 7vmin;
  fill: #26262c;
  transform: translateY(100%) scale(-1);
`

interface ProjectText {
  Headline: string
  Description: string
  LinkHref: string
}

export default function OpenSourceProjects() {
  const { t } = useTranslation()
  const [viewportRef] = useEmblaCarousel(
    {
      skipSnaps: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [WheelGesturesPlugin()]
  )

  const projectTexts: ProjectText[] = t('OpenSourceProjects.Projects', {
    returnObjects: true,
  })

  return (
    <Section css={sectionCSS}>
      <Triangle css={triangleTop} />
      <GridRow justify="center">
        <GridItem col={[12, 10]}>
          <Headline level="h2" line>
            <Trans i18nKey={'OpenSourceProjects.Title'} />
          </Headline>
          <Spacer />
          <p>
            <Trans i18nKey={'OpenSourceProjects.Text'} />
          </p>
          <Spacer />
        </GridItem>
      </GridRow>
      <div className="embla">
        <div className="embla__viewport is-overflow-visible" ref={viewportRef}>
          <GridRow
            component="ul"
            wrap="nowrap"
            align="stretch"
            className="embla__container"
          >
            {projectTexts.map((p) => (
              <OpenSourceProjectTeaser
                key={p.Headline}
                headline={p.Headline}
                description={p.Description}
                href={p.LinkHref}
              />
            ))}
          </GridRow>
        </div>
      </div>
      <Triangle css={triangle} />
    </Section>
  )
}
