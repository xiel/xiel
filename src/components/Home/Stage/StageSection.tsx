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

interface Props {}

type XYS = [number, number, number]

const initialXYS: XYS = [0, 0, 1]

const calc = (x: number, y: number, scale: number = 1): XYS => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  scale,
]

// moving back on z-axis and scale up, to make bg layer not cut into text layer in front (Safari)
const trans = (...[x, y, s]: XYS) =>
  `perspective(600px) translateZ(-300px) scale(1.5) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function StageSection(props: Props) {
  const { t } = useTranslation()
  const stopFn = useRef(() => {})
  const { ref: introBoxRef, rect, pos } = useElementSize()
  const [cardSpring, setCardSpring] = useSpring(() => ({
    xys: initialXYS,
    config: { mass: 4, tension: 80, friction: 10 },
  }))

  console.log('rect', rect)
  console.log('pos', pos)

  useEffect(() => {
    let count = 0
    const setCardSpringRandom = () => {
      console.log(
        calc(
          window.innerHeight * Math.random(),
          window.innerWidth * Math.random()
        )
      )
      setCardSpring({
        xys: calc(
          window.innerHeight * Math.random(),
          window.innerWidth * Math.random()
        ),
      })
    }

    const t = setInterval(() => {
      setCardSpringRandom()
      count++
      count >= 20 && stopFn.current()
    }, 3000)

    requestAnimationFrame(() => setCardSpringRandom())

    stopFn.current = () => {
      clearInterval(t)
      setCardSpring({ xys: [0, 0, 1] })
    }

    return () => stopFn.current()
  }, [setCardSpring])

  return (
    <>
      <Section
        css={css`
          position: relative;
          overflow: hidden;
          height: 30vh;

          @media (min-width: 500px) {
            height: 50vw;
            max-height: calc(100vh - 50px);
          }
        `}
      >
        <StageHero />
      </Section>
      <GridRow justify="center">
        <GridItem col={[12, 12, 12]}>
          <GridRow>
            <GridItem col={[12]}>
              <div css={c.introBoxWrapper}>
                <div
                  css={c.introBox}
                  ref={introBoxRef}
                  onMouseEnter={() => stopFn.current()}
                  onMouseMove={({ clientX: x, clientY: y }) => {
                    setCardSpring({ xys: calc(x, y) })
                  }}
                  onMouseLeave={() => setCardSpring({ xys: [0, 0, 1] })}
                >
                  <div css={c.introBoxInner}>
                    <Portrait css={c.avatarCSS} />
                    <div css={c.introTextCSS}>
                      <Headline>{t('StageSection.Hello')}</Headline>
                      <p css={c.introText}>{t('StageSection.Intro')}</p>
                      <SocialLinkList
                        css={css`
                          margin-top: 1rem;
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
        </GridItem>
      </GridRow>
    </>
  )
}
