import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import SocialLinkList from '../../../atoms/SocialLinkList'
import Headline from '../../../atoms/Typo/Headline'
import portraitImg from '../../../public/about/BGray Portrait Felix Leupold 2015_square.jpg'
import { GridItem, GridRow } from '../../Layout/Grid'
import StageHero from './StageHero'
import * as c from './StageSection.css'

export default function StageSection() {
  const { t } = useTranslation()
  return (
    <article>
      <StageHero />
      <GridRow justify="center" css={c.introBoxWrapperRow}>
        <GridItem>
          <div css={c.introBoxWrapper}>
            <div css={c.introBox}>
              <div css={[c.introBoxBackground]} />
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
                      filter: drop-shadow(0 0.15em 0.2em rgba(0, 0, 0, 0.6));
                    `}
                  />
                </div>
              </div>
            </div>
          </div>
        </GridItem>
      </GridRow>
    </article>
  )
}
