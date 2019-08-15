import React from 'react'
import { Link } from 'gatsby'
import { GridItem, GridRow } from '../Layout/Grid'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'

interface Props {}

export default function FooterSection(props: Props) {
  const { t } = useTranslation()

  return (
    <>
      <GridRow>
        <GridItem>
          <h4 className="label">{t('Footer.Title')}</h4>
          <a href={`mailto:${t('Footer.Email')}`}>{t('Footer.Email')}</a>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem>
          <ul
            css={css`
              display: inline-flex;
            `}
          >
            <li>
              <Link to="/impressum/">Datenschutz & Impressum</Link>
            </li>
          </ul>
        </GridItem>
      </GridRow>
    </>
  )
}
