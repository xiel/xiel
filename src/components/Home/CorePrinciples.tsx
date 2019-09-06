import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Headline from '../../atoms/Typo/Headline'
import { css } from '@emotion/core'
import Button from '../../atoms/Button'
import { Theme } from '../../styles/theme'

interface Props {}

const teaserText = css`
  line-height: 1.5;

  p {
    margin: 1.5em 0;
  }
`

const sectionCSS = (theme: Theme) => css`
  //background: ${theme.background};
`

const teaserContainer = css`
  overflow: auto;
  scroll-snap-type: x mandatory;
`

const slider = css`
  margin: 5vh 0 0;
`

const teaser = css`
  scroll-snap-align: start;
`

export default function CorePrinciples(props: Props) {
  return (
    <Section css={sectionCSS}>
      <GridRow justify="center">
        <GridItem col={[12, 10]}>
          <Headline level="h2" line>
            Core Principles
          </Headline>
          <div css={teaserText}>
            <p>
              My user-centric approach focuses on creating a seamless experience
              across all digital touchpoints. By leveraging a combination of
              open source software, 3rd-party solutions, and proprietary tools,
              I deliver effective, sustainable, and performant results that
              drive value.
            </p>
          </div>
        </GridItem>
      </GridRow>

      <div css={slider}>
        <GridRow wrap="nowrap" css={teaserContainer}>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              User Experience
            </Headline>
            <div css={teaserText}>
              <p>
                Ich gestalte Produkte, die gut strukturiert, zugänglich und
                effektiv sind. Bei der Entwicklung von Ideen und Konzepten stehe
                ich mit meinen Erfahrungen zu bewährten und neuen Technologien
                beratend zur Seite.
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Interface Design
            </Headline>
            <div css={teaserText}>
              <p>
                Ansprechende und dennoch einfache Benutzerobflächen machen eine
                Webseite oder App intuitiv zugänglich. Und durch Responsives
                Design funktionieren Sie zukunftssicher auf allen Plattformen.
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Clean Code
            </Headline>
            <div css={teaserText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                amet assumenda cumque, dicta et incidunt iste labore maiores non
                nulla, officia quae quaerat quo ratione repellat sint vel vero
                voluptatum!
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Automatisiertes Testing & CI / CD
            </Headline>
            <div css={teaserText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                amet assumenda cumque, dicta et incidunt iste labore maiores non
                nulla, officia quae quaerat quo ratione repellat sint vel vero
                voluptatum!
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Performance Optimization
            </Headline>
            <div css={teaserText}>
              <p>
                Deep unterstanding about the inner works of the rendering engine
                of browsers. Can't fix the issue real performance because it's
                outside of your reach? Often he perceived performance can still
                be improved. Nulla, officia quae quaerat quo ratione repellat
                sint vel vero voluptatum!
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Accessiblity
            </Headline>
            <div css={teaserText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                amet assumenda cumque, dicta et incidunt iste labore maiores non
                nulla, officia quae quaerat quo ratione repellat sint vel vero
                voluptatum!
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Motion Design
            </Headline>
            <div css={teaserText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                amet assumenda cumque, dicta et incidunt iste labore maiores non
                nulla, officia quae quaerat quo ratione repellat sint vel vero
                voluptatum!
              </p>
            </div>
          </GridItem>
          <GridItem col={[10, 10, 4]} css={teaser}>
            <Headline level="h3" line>
              Development
            </Headline>
            <div css={teaserText}>
              <p>
                Mit Hilfe modernster Technologien werden aus statischen
                Konzepten und Screendesigns lebendige Webseiten & Apps für
                Smartphones, Tablets und Desktops geschaffen.
              </p>
              <Button>Technologien</Button>
            </div>
          </GridItem>
        </GridRow>
      </div>

      {/*<GridRow*/}
      {/*  justify="center"*/}
      {/*  css={css`*/}
      {/*    margin-top: 5vh;*/}
      {/*  `}*/}
      {/*>*/}
      {/*  <GridItem col={[12, 10]}>*/}
      {/*    <Headline level="h3">Articles</Headline>*/}
      {/*    <div css={teaserText}>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <a href="#">*/}
      {/*            Assumenda blanditiis commodi cupiditate distinctio*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="#">officia quae quaerat quo</a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </GridItem>*/}
      {/*</GridRow>*/}
    </Section>
  )
}
