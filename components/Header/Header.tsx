import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import Logo from './Logo'

interface Props extends HeaderElProps {
  siteTitle: string
}

interface HeaderElProps {
  fixed?: boolean
}

const HeaderEl = styled('header')<HeaderElProps>`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  padding: 1rem 1rem 0;

  @media (min-width: 768px) {
    padding: 1.2rem 1.5rem 0;
  }
`

const fixedHeader = css`
  position: sticky;
`

const inner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(1240px, 100%);
  margin: 0 auto;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(166, 218, 233, 0.16);
  border-radius: 999px;
  background: rgba(7, 16, 23, 0.78);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(18px);

  @media (min-width: 768px) {
    padding: 0.9rem 1.2rem;
  }
`

const brand = css`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
`

const brandText = css`
  display: grid;
  min-width: 0;

  strong {
    color: #f2f6f7;
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  span {
    color: #98adb8;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

const nav = css`
  display: none;
  align-items: center;
  gap: 0.45rem;

  @media (min-width: 900px) {
    display: flex;
  }
`

const navLink = css`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0 0.9rem;
  border-radius: 999px;
  color: #bdd0d8;
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    color 180ms ease,
    background 180ms ease;

  &:hover,
  &:focus {
    color: #f2f6f7;
    background: rgba(255, 255, 255, 0.06);
  }
`

const headerAction = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.6rem;
  padding: 0 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(124, 226, 215, 0.34);
  color: #041116;
  background: linear-gradient(135deg, #7ce2d7, #e9fbf8);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(124, 226, 215, 0.24);
  }
`

const Header = ({ siteTitle = '', fixed }: Props) => {
  const { t } = useTranslation()

  return (
    <HeaderEl css={fixed && fixedHeader}>
      <div css={inner}>
        <div css={brand}>
          <Logo siteTitle={siteTitle} />
          <div css={brandText}>
            <strong>Felix Leupold</strong>
            <span>{t('Header.Role')}</span>
          </div>
        </div>
        <nav css={nav} aria-label="Primary">
          <a css={navLink} href="#capabilities">
            {t('Nav.Capabilities')}
          </a>
          <a css={navLink} href="#projects">
            {t('Nav.Projects')}
          </a>
          <a css={navLink} href="#contact">
            {t('Nav.Contact')}
          </a>
        </nav>
        <a css={headerAction} href="mailto:felix@xiel.de">
          {t('Header.Contact')}
        </a>
      </div>
    </HeaderEl>
  )
}

export default Header
