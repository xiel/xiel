import React from 'react'
import { Link } from 'gatsby'
import { GridItem, GridRow } from '../Layout/Grid'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import SocialLinkList from '../../atoms/SocialLinkList'
import styled from '@emotion/styled'
import { Theme } from '../../styles/theme'

interface Props {}

const footerCSS = (theme: Theme) => css`
  position: relative;
  background: ${theme.background};
`

const FooterList = styled.ul<{}, Theme>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  font-size: 12px;
`

const FooterListItem = styled.li<{}, Theme>`
  margin: 0 0.5em;
`

const FooterLink = styled(Link)<{}, Theme>`
  display: inline-block;
  border-bottom: 1px solid transparent;
  transition: 300ms;

  &:hover,
  &:focus,
  &.is-active {
    border-color: currentColor;
  }
`

const link = {
  activeClassName: 'is-active',
}
const year = new Date().toJSON().split('-')[0]

export default function FooterSection(props: Props) {
  const { t } = useTranslation()

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
              <FooterLink to="/" lang="en" {...link}>
                English
              </FooterLink>
              {' / '}
              <FooterLink to="/de/" lang="de" {...link}>
                Deutsch
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink to="/impressum/" {...link}>
                {t('Footer.PrivacyLink')}
              </FooterLink>
            </FooterListItem>
            <FooterListItem>{t('Footer.Copyright', { year })}</FooterListItem>
          </FooterList>
        </GridItem>
      </GridRow>
    </footer>
  )
}
