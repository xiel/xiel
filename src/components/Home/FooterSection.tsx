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
          <a href="#" download>
            Download CV
          </a>

          <button>Get in touch</button>

          <h4>{t('Footer.Title')}</h4>
          <a href={`mailto:${t('Footer.Email')}`}>{t('Footer.Email')}</a>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem>
          <ul
            css={css`
              display: inline-flex;
              font-size: 0.5rem;
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
