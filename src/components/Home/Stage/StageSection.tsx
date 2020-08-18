import React from 'react'
import { css } from '@emotion/core'
import StageHero from './StageHero'
import { GridItem, GridRow } from '../../Layout/Grid'
import Portrait from '../Portrait'
import Headline from '../../../atoms/Typo/Headline'
import SocialLinkList from '../../../atoms/SocialLinkList'
import { useTranslation } from 'react-i18next'
import * as c from './StageSection.css'

interface Props {}

export default function StageSection(props: Props) {
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
            </div>
          </div>
        </GridItem>
      </GridRow>
    </article>
  )
}
