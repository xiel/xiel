import React, { useEffect } from 'react'
import Section from '../Layout/Section'
import { css } from '@emotion/core'
import StageHero from './StageHero'
import { GridItem, GridRow } from '../Layout/Grid'
import Portrait from './Portrait'
import Headline from '../../atoms/Typo/Headline'
import SocialLinkList from '../../atoms/SocialLinkList'
import { animated, useSpring } from 'react-spring'
import { useTranslation } from 'react-i18next'

const introBox = css`
  position: relative;
  white-space: nowrap;
  z-index: 2;
  padding: 1.4rem 2rem;
  box-shadow: 0 1rem 2rem -0.5rem #000;
  backface-visibility: hidden;

  @media (min-width: 500px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

const introBoxBackground = css`
  border-radius: 1.6rem;
  background: linear-gradient(
    45deg,
    hsla(206, 37%, 25%, 0.75),
    hsla(206, 24%, 13%, 0.75)
  );
`

const introBoxInner = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translate3d(0, 0, 1px);

  @media (min-width: 500px) {
    flex-direction: row;
  }
`

const introTextCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 500px) {
    text-align: left;
    align-items: flex-start;
  }
`

const introText = css`
  color: hsla(0, 0%, 100%, 0.5);
`

const avatarCSS = css`
  align-self: center;
  flex: 1 0 auto;
  width: 7rem;
  max-width: 150px;
  border-radius: 1rem;
  box-shadow: black 0 0.25rem 1.6rem -0.6rem;
  margin: 0 0 1.6em 0;

  @media (min-width: 500px) {
    margin: 0 1.6rem 0 -1%;
  }
`

interface Props {}

type XYS = [number, number, number]

const initialXYS: XYS = [0, 0, 1]

const calc = (x: number, y: number): XYS => [
  -(y - window.innerHeight / 2) / 75,
  (x - window.innerWidth / 2) / 75,
  1.05,
]

const trans = (...[x, y, s]: XYS) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const antiTrans = (...[x, y, s]: XYS) =>
  `perspective(1200px) rotateX(${x * -1}deg) rotateY(${y * -1}deg) scale(${s})`

export default function StageSection(props: Props) {
  const { t } = useTranslation()
  const [cardSpring, setCardSpring] = useSpring(() => ({
    xys: initialXYS,
    config: { mass: 2, tension: 200, friction: 40 },
  }))

  useEffect(() => {
    console.log('card effect')
    let count = 0
    const setCardSpringRandom = () => {
      console.log('setCardSpringRandom')
      setCardSpring({
        xys: calc(
          window.innerHeight * Math.random(),
          window.innerWidth * Math.random()
        ),
      })
    }

    const t = setInterval(() => {
      console.log('interval', count)
      setCardSpringRandom()
      count++
      if (count >= 5) {
        clearInterval(t)
        console.log('animation end')
      }
    }, 1000)

    setCardSpringRandom()

    return () => clearInterval(t)
  }, [setCardSpring])

  // @ts-ignore
  return (
    <>
      <Section
        onMouseMove={({ clientX: x, clientY: y }) =>
          setCardSpring({ xys: calc(x, y) })
        }
        onMouseLeave={() => setCardSpring({ xys: [0, 0, 1] })}
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
      <GridRow justify="center">
        <GridItem col={[12, 12, 12]}>
          <GridRow>
            <GridItem col={[12]}>
              <div
                css={css`
                  position: relative;
                `}
              >
                <div>
                  <animated.div
                    css={[introBox, introBoxBackground]}
                    style={{
                      transform: cardSpring.xys.interpolate(trans as any),
                    }}
                  >
                    <animated.div
                      css={introBoxInner}
                      style={{
                        transform: cardSpring.xys.interpolate(antiTrans as any),
                      }}
                    >
                      <Portrait css={avatarCSS} />
                      <div css={introTextCSS}>
                        <Headline>{t('StageSection.Hello')}</Headline>
                        <p css={introText}>{t('StageSection.Intro')}</p>
                        <SocialLinkList
                          css={css`
                            margin-top: 1rem;
                          `}
                        />
                      </div>
                    </animated.div>
                  </animated.div>
                </div>
              </div>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
    </>
  )
}
