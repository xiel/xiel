import { css } from '@emotion/react'
import Image from 'next/image'
import { rgba } from 'polished'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import SocialLinkList from '../../atoms/SocialLinkList'
import Headline from '../../atoms/Typo/Headline'
import portraitImg from '../../public/about/BGray Portrait Felix Leupold 2015_square.jpg'
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
    transparent,
    ${rgba(theme.secondaryBackground, 0.1)} 30%,
    ${rgba(theme.secondaryBackground, 0.8)} 70%,
    ${rgba(theme.secondaryBackground, 0.99)}
  );
`

export default function IntroSection() {
  const { t } = useTranslation()
  return (
    <Section css={sectionCSS}>
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <div css={c.introBox}>
            <div css={c.introBoxInner}>
              <div css={c.avatarCSS}>
                <Image
                  alt=""
                  src={portraitImg}
                  layout="responsive"
                  sizes="200px"
                />
              </div>
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
          </div>
        </GridItem>
      </GridRow>
      <Spacer size={5} />
      <GridRow justify="center">
        <GridItem col={[12, 10, 10]}>
          <Headline level="h2" component="p">
            <Trans i18nKey={'Intro.Title'} />
          </Headline>
          <Spacer size={2} />
          <p>
            <Trans i18nKey={'Intro.Text'} />
          </p>
        </GridItem>
      </GridRow>
      <TriangleSpacer />
    </Section>
  )
}
