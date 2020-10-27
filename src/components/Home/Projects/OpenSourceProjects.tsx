import React, { useEffect } from 'react'
import Section from '../../Layout/Section'
import { GridItem, GridRow } from '../../Layout/Grid'
import Headline from '../../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import { Trans, useTranslation } from 'react-i18next'
import Spacer from '../../Layout/Spacer'
import OpenSourceProjectTeaser from './OpenSourceProjectTeaser'
import Triangle from '../../../assets/svg/triangle.svg'
import { Theme } from '../../../styles/theme'
import { useEmblaCarousel } from 'embla-carousel/react'
import { setupWheelGestures } from 'embla-carousel-wheel-gestures'
import '../../../styles/embla.css'

interface Props {}

const sectionCSS = css`
  color: #eee;
  z-index: 1;
  padding-top: 7rem;
  background: linear-gradient(180deg, #222d35, #26262c);
`

const triangleTop = (theme: Theme) => css`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 3.5vmin;
  fill: #222d35;
  transform: translateY(-100%) scaleX(-1);
`

const triangle = (theme: Theme) => css`
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

export default function OpenSourceProjects(props: Props) {
  const { t } = useTranslation()
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const projectTexts: ProjectText[] = t('OpenSourceProjects.Projects', {
    returnObjects: true,
  })

  useEffect(() => embla && setupWheelGestures(embla), [embla])

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
          <GridRow component="ul" wrap="nowrap" align="stretch" className="embla__container">
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
