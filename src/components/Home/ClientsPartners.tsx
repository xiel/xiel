import React from 'react'
import { GridItem, GridRow } from '../Layout/Grid'
import Headline from '../../atoms/Typo/Headline'
import Section from '../Layout/Section'
import { css } from '@emotion/core'

interface Props {}

const teaserText = css`
  line-height: 1.5;

  p {
    margin: 1.5em 0;
  }
`

export default function ClientsPartners(props: Props) {
  return (
    <Section
      css={css`
        background: linear-gradient(to bottom, #110e15, #1f1e35);
        background: #26262c;
      `}
    >
      <GridRow justify={'center'}>
        <GridItem col={[12, 10]}>
          <GridRow>
            <GridItem col={[12, 10, 1 / 2]}>
              <Headline level="h2" line>
                Clients & Partners
              </Headline>
              <div css={teaserText}>
                <p>
                  In den vergangenen Jahren hatte ich die Ehre mit großartigen
                  Teams an einem großen Spektrum von Projekten für die besten
                  Kunden der Welt zu arbeiten. Von einnehmenden Touch-Interfaces
                  bis zu komplexen FrontEnd-Anwendungen.
                </p>
                <ul>
                  <li>
                    Lufthansa, BCG, Aperto, Boffinhouse, ZDF, exozet, Daimler,
                    EO
                  </li>
                </ul>
              </div>
            </GridItem>
          </GridRow>
        </GridItem>
      </GridRow>
    </Section>
  )
}
