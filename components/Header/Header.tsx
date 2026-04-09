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
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(166, 218, 233, 0.12);
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    padding: 0.7rem 0;
  }
`

const brand = css`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
`

const brandText = css`
  color: #f2f6f7;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  white-space: nowrap;
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
  min-height: 2.2rem;
  padding: 0 0.35rem;
  color: #bdd0d8;
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    color 180ms ease,
    opacity 180ms ease;

  &:hover,
  &:focus {
    color: #f2f6f7;
    opacity: 1;
  }
`

const headerAction = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.35rem;
  padding: 0 0.25rem;
  color: #e7f4f6;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition:
    transform 180ms ease,
    color 180ms ease;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    color: #befff4;
  }
`

const Header = ({ siteTitle = '', fixed }: Props) => {
  const { t } = useTranslation()

  return (
    <HeaderEl css={fixed && fixedHeader}>
      <div css={inner}>
        <div css={brand}>
          <Logo siteTitle={siteTitle} />
          <div css={brandText}>Felix Leupold</div>
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
