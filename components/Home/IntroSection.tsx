import { css } from '@emotion/react'
import Image from 'next/image'
import { rgba } from 'polished'
import { Trans, useTranslation } from 'react-i18next'

import SocialLinkList from '../../atoms/SocialLinkList'
import Headline from '../../atoms/Typo/Headline'
import portraitImg from '../../public/about/portrait-felix-leupold-2024-square.jpg'
import { breatheSlowly, enter } from '../../styles/motion'
import { XTheme } from '../../styles/theme'
import { GridItem, GridRow } from '../Layout/Grid'
import Section from '../Layout/Section'
import Spacer from '../Layout/Spacer'
import * as c from './Stage/StageSection.css'
import { TriangleSpacer } from './Technologies/Technologies'

const sectionCSS = (theme: XTheme) => css`
  background: ${theme.background};
  background: linear-gradient(
    to bottom,
    ${rgba(theme.stageTint, 0.15)},
    ${rgba(theme.stageTint, 0.35)} 30%,
    ${rgba(theme.stageTint, 0.85)} 70%,
    ${rgba(theme.stageTint, 0.99)}
  );

  /* ambient violet glow behind the intro, pulsing slowly */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(
      ellipse 80% 50% at 20% 0%,
      ${rgba(theme.stageGlow, 0.28)},
      transparent 70%
    );
    ${breatheSlowly};
  }
`

export default function IntroSection() {
  const { t } = useTranslation()
  return (
    <Section css={sectionCSS}>
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <div css={c.introBox}>
            <div css={c.introBoxInner}>
              <div css={[c.avatarCSS, enter(0)]}>
                <Image
                  alt=""
                  src={portraitImg}
                  layout="responsive"
                  sizes="200px"
                />
              </div>
              <div css={c.introTextCSS}>
                <Headline css={enter(120)}>{t('StageSection.Hello')}</Headline>
                <p css={[c.introText, enter(240)]}>{t('StageSection.Intro')}</p>
                <SocialLinkList
                  css={[
                    css`
                      margin-top: 1rem;
                    `,
                    enter(360),
                  ]}
                />
              </div>
            </div>
          </div>
        </GridItem>
      </GridRow>
      <Spacer size={5} />
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <Headline level="h2" component="p" css={enter(520)}>
            <Trans i18nKey={'Intro.Title'} />
          </Headline>
          <Spacer size={2} />
          <p css={enter(680)}>
            <Trans i18nKey={'Intro.Text'} />
          </p>
        </GridItem>
      </GridRow>
      <TriangleSpacer />
    </Section>
  )
}
