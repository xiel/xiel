import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ActiveLink } from '../../atoms/ActiveLink'
import SocialLinkList from '../../atoms/SocialLinkList'
import { XTheme } from '../../styles/theme'
import { GridItem, GridRow } from '../Layout/Grid'

const footerCSS = (theme: XTheme) => css`
  position: relative;
  padding: 0 1rem 1.5rem;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(8, 18, 24, 0.8)),
    ${theme.background};

  @media (min-width: 768px) {
    padding: 0 1.5rem 2rem;
  }
`

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 0.9rem;
  margin-top: 0.9rem;
  font-size: 12px;
`

const FooterListItem = styled.li`
  margin: 0;
`

const FooterLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid transparent;
  color: #bdd0d8;
  transition: 300ms;

  &:hover,
  &:focus,
  &.is-active {
    color: #fff;
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
            padding: 1.3rem 1rem;
            text-align: center;
            border: 1px solid rgba(166, 218, 233, 0.14);
            border-radius: 1.5rem;
            background: rgba(8, 18, 24, 0.72);
            backdrop-filter: blur(16px);
          `}
        >
          <p
            css={css`
              margin: 0;
              color: #f2f6f7;
              font-family: 'Space Grotesk', 'Inter', sans-serif;
              font-size: 1.1rem;
              font-weight: 700;
              letter-spacing: -0.03em;
            `}
          >
            {t('Footer.Title')}
          </p>
          <p
            css={css`
              margin: 0.45rem 0 0;
              color: #9cb1bb;
            `}
          >
            {t('Footer.Text')}
          </p>
          <SocialLinkList
            css={css`
              margin-top: 1rem;
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
