import React from 'react'
import { Link } from 'gatsby'
import Container from '../Layout/Container'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

interface Props {}

const Ul = styled.ul(css`
  display: inline-flex;
`)

export default function FooterSection(props: Props) {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <GridRow>
          <GridItem>
            <h4 className="label">{t('Footer.Title')}</h4>
            <a href={`mailto:${t('Footer.Email')}`}>{t('Footer.Email')}</a>
            <Ul>
              <li>
                <a href="http://twitter.com/xiel">Twitter</a>
              </li>
              <li>
                <a href="http://github.com/xiel">Github</a>
              </li>
              <li>
                <a href="https://dribbble.com/xiel">Dribbble</a>
              </li>
              <li>
                <a href="http://instagram.com/xiel">Instagram</a>
              </li>
            </Ul>
          </GridItem>
          <GridItem>
            <Ul>
              <li>
                <Link to="/impressum/">Datenschutz & Impressum</Link>
              </li>
            </Ul>
          </GridItem>
        </GridRow>
      </Container>
    </Section>
  )
}
