import React, { useEffect, useRef } from 'react'
import Section from '../../Layout/Section'
import { css } from '@emotion/core'
import StageHero from './StageHero'
import { GridItem, GridRow } from '../../Layout/Grid'
import Portrait from '../Portrait'
import Headline from '../../../atoms/Typo/Headline'
import SocialLinkList from '../../../atoms/SocialLinkList'
import { animated, useSpring } from 'react-spring'
import { useTranslation } from 'react-i18next'
import * as c from './StageSection.css'
import useElementSize from '../../../hooks/useElementSize'
import { mapNumInRange } from '../../../helpers/mapInRange'
import { throttle } from 'throttle-debounce'

interface Props {}

type XYS = [number, number, number]

const initialXYS: XYS = [0, 0, 1]

// map from 0..1 value to -maxDeg..maxDeg values
const calc = (x: number, y: number, scale: number = 1, maxDeg = 4): XYS => [
  mapNumInRange(y, 0, 1, maxDeg * -1, maxDeg) * -1,
  mapNumInRange(x, 0, 1, maxDeg * -1, maxDeg),
  scale,
]

// moving back on z-axis and scale up, to make bg layer not cut into text layer in front (Safari)
const trans = (...[x, y, s]: XYS) =>
  `perspective(600px) translateZ(-300px) scale(1.5) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function StageSection(props: Props) {
  const { t } = useTranslation()
  const stopFn = useRef(() => {})
  const { ref: introBoxRef, rect: introBoxRect } = useElementSize()
  const [cardSpring, setCardSpring] = useSpring(() => ({
    xys: initialXYS,
    config: { mass: 5, tension: 20, friction: 3 },
  }))

  const moveMoveUpdate = throttle(
    250,
    ({ pageX, pageY }: { pageX: number; pageY: number }) => {
      if (!introBoxRect) return
      const boxX = (pageX - introBoxRect.pageX) / introBoxRect.offsetWidth
      const boxY = (pageY - introBoxRect.pageY) / introBoxRect.offsetHeight
      setCardSpring({ xys: calc(boxX, boxY) })
    }
  )

  useEffect(() => {
    let count = 0
    const setCardSpringRandom = () => {
      const val = (Math.sin(performance.now()) + 1) / 2
      setCardSpring({
        xys: calc(val, val),
      })
    }

    const t = setInterval(() => {
      setCardSpringRandom()
      count++
      count >= 20 && stopFn.current()
    }, 1000)

    requestAnimationFrame(setCardSpringRandom)

    stopFn.current = () => {
      clearInterval(t)
      setCardSpring({ xys: [0, 0, 1] })
    }

    return () => stopFn.current()
  }, [setCardSpring])

  return (
    <>
      <Section css={c.section}>
        <StageHero />
      </Section>
      <GridRow justify="center">
        <GridItem>
          <div css={c.introBoxWrapper}>
            <div
              css={c.introBox}
              ref={introBoxRef}
              onMouseEnter={() => stopFn.current()}
              onMouseMove={({ pageX, pageY }) =>
                moveMoveUpdate({ pageX, pageY })
              }
            >
              <div css={c.introBoxInner}>
                <Portrait css={c.avatarCSS} />
                <div css={c.introTextCSS}>
                  <Headline>{t('StageSection.Hello')}</Headline>
                  <p css={c.introText}>{t('StageSection.Intro')}</p>
                  <SocialLinkList
                    css={css`
                      margin-top: 1rem;
                      filter: drop-shadow(0 0.15em 0.2em rgba(0, 0, 0, 0.6));
                    `}
                  />
                </div>
              </div>
              <animated.div
                css={[c.introBoxBackground]}
                style={{
                  transform: cardSpring.xys.interpolate(trans as any),
                }}
              />
            </div>
          </div>
        </GridItem>
      </GridRow>
    </>
  )
}