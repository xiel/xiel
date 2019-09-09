import React from 'react'
import { Link } from 'gatsby'
import { GridItem, GridRow } from '../Layout/Grid'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import SocialLinkList from '../../atoms/SocialLinkList'

interface Props {}

const year = new Date().toJSON().split('-')[0]

export default function FooterSection(props: Props) {
  const { t } = useTranslation()

  return (
    <>
      <GridRow justify="center">
        <GridItem
          col={[12, 12, 10]}
          css={css`
            padding: 1rem 0;
            text-align: center;
          `}
        >
          <SocialLinkList
            css={css`
              font-size: 1rem;
            `}
          />
          <p
            css={css`
              margin-top: 0.5rem;
              font-size: 12px;
            `}
          >
            <Link to="/impressum/">{t('Footer.PrivacyLink')}</Link>
            {t('Footer.Copyright', { year })}
          </p>
        </GridItem>
      </GridRow>
    </>
  )
}
