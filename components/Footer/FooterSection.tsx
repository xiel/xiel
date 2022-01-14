import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ActiveLink } from '../../atoms/ActiveLink'
import SocialLinkList from '../../atoms/SocialLinkList'
import { XTheme } from '../../styles/theme'
import { GridItem, GridRow } from '../Layout/Grid'

const footerCSS = (theme: XTheme) => css`
  position: relative;
  background: ${theme.background};
`

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  font-size: 12px;
`

const FooterListItem = styled.li`
  margin: 0 0.5em;
`

const FooterLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid transparent;
  transition: 300ms;

  &:hover,
  &:focus,
  &.is-active {
    border-color: currentColor;
  }
`

const year = new Date().toJSON().split('-')[0]

export default function FooterSection() {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  return (
    <footer css={footerCSS}>
      <GridRow justify="center">
        <GridItem
          col={[12, 12, 10]}
          css={css`
            position: relative;
            padding: 1rem 0;
            text-align: center;
          `}
        >
          <SocialLinkList
            css={css`
              font-size: 1rem;
            `}
          />
          <FooterList>
            <FooterListItem>
              <ActiveLink href={pathname} locale="en">
                <FooterLink lang="en">English</FooterLink>
              </ActiveLink>
              {' / '}
              <ActiveLink href={pathname} locale="de">
                <FooterLink lang="de">Deutsch</FooterLink>
              </ActiveLink>
            </FooterListItem>
            <FooterListItem>
              <ActiveLink href="/impressum" locale="de">
                <FooterLink>{t('Footer.PrivacyLink')}</FooterLink>
              </ActiveLink>
            </FooterListItem>
            <FooterListItem>{t('Footer.Copyright', { year })}</FooterListItem>
          </FooterList>
        </GridItem>
      </GridRow>
    </footer>
  )
}
