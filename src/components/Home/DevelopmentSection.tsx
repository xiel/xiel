import React from 'react'
import Section from '../Layout/Section'
import Container from '../Layout/Container'
import { css } from '@emotion/core'
import { GridItem, GridRow } from '../Layout/Grid'

interface Props {}

export default function DevelopmentSection(props: Props) {
  return (
    <Section>
      <GridRow justify={'center'}>
        <GridItem col={1 / 2}>
          <header className="section__header">
            <h2>Modern Web Development</h2>
            <p>
              Leidenschaft für Design, Technologie und Innovation verbindet sich
              in all meinen Projekten, die ich gerne von der ersten Idee bis zur
              Veröffentlichung begleite.
            </p>
          </header>
        </GridItem>
      </GridRow>

      <div
        className="rb-itemscroller itemscroller--development js-rb-live"
        data-module="itemscroller"
      >
        <div className="itemscroller-viewport">
          <div
            className="itemscroller-content flx-group"
            css={css`
              display: flex;
            `}
          >
            <div className="flx--4°sm flx--4°md dev-feature dev-feature--ux">
              <div className="dev-feature__icon">
                <svg
                  width="272"
                  height="272"
                  viewBox="0 0 272 272"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#D0011B"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path d="M116.62 149.87v8.828h38.76l.003-9.018c10.57-6.53 17.617-18.24 17.617-31.597C173 97.603 156.435 81 136 81s-37 16.603-37 37.083c0 13.36 7.044 25.26 17.62 31.786z" />
                    <path d="M128.6 159.57l-5.224-35.792" />
                    <path d="M143.4 159.57l5.224-35.792" />
                    <path d="M123.376 125.524l6.965 5.238 5.225-5.238 5.223 5.238 6.965-5.238" />
                    <path
                      id="Rectangle-path"
                      d="M116.412 158.698h39.176v10.476h-39.176z"
                    />
                    <path
                      id="Rectangle-path"
                      d="M119.894 170.048h31.34v10.476h-31.34z"
                    />
                    <path d="M123.376 180.524h24.376V191h-24.376z" />
                    <path d="M136 271c74.558 0 135-60.442 135-135 0-54.758-32.602-101.902-79.454-123.08C174.606 5.263 155.8 1 136 1 61.442 1 1 61.442 1 136c0 74.558 60.442 135 135 135z" />
                  </g>
                </svg>
              </div>
              <div className="dev-feature__text">
                <h3>User Experience</h3>
                <p>
                  Ich gestalte Produkte, die gut strukturiert, zugänglich und
                  effektiv sind. Bei der Entwicklung von Ideen und Konzepten
                  stehe ich mit meinen Erfahrungen zu bewährten und neuen
                  Technologien beratend zur Seite.
                </p>
              </div>
            </div>

            <div className="flx--4°sm flx--4°md dev-feature dev-feature--design">
              <div className="dev-feature__icon">
                <svg
                  width="272"
                  height="272"
                  viewBox="0 0 272 272"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#81CF2A"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M137 152.333L130.333 159 117 145.667l6.667-6.667 66.666-55L192 85.667l-55 66.666z"
                      id="Shape"
                    />
                    <path d="M123 139l13 13" id="Shape" />
                    <path d="M130 159.44S116.56 188 88 188c0 0 4.623-27.408 15.12-35.28 6.72-5.04 13.44-6.72 13.44-6.72" />
                    <path d="M136 271c74.558 0 135-60.442 135-135 0-54.758-32.602-101.902-79.454-123.08C174.606 5.263 155.8 1 136 1 61.442 1 1 61.442 1 136c0 74.558 60.442 135 135 135z" />
                  </g>
                </svg>
              </div>
              <div className="dev-feature__text">
                <h3>Interface Design</h3>
                <p>
                  Ansprechende und dennoch einfache Benutzerobflächen machen
                  eine Webseite oder App intuitiv zugänglich. Und durch
                  Responsives Design funktionieren Sie zukunftssicher auf allen
                  Plattformen.
                </p>
              </div>
            </div>

            <div className="flx--4°sm flx--4°md dev-feature dev-feature--tech">
              <div className="dev-feature__icon">
                <svg
                  width="272"
                  height="272"
                  viewBox="0 0 272 272"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#3C99C8"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path d="M74 108h130v63H74z" />
                    <path d="M86 108V91.556h30v-14.39H94.57V71" />
                    <path d="M81 122h8" />
                    <path d="M93 122h8" />
                    <path d="M106 122h8" />
                    <path d="M118 122h8" />
                    <path d="M130 122h8" />
                    <path d="M143 122h8" />
                    <path d="M155 122h8" />
                    <path d="M168 122h8" />
                    <path d="M181 122h8" />
                    <path d="M88 140h8" />
                    <path d="M101 140h8" />
                    <path d="M113 140h8" />
                    <path d="M127 140h8" />
                    <path d="M139 140h8" />
                    <path d="M151 140h8" />
                    <path d="M165 140h8" />
                    <path d="M177 140h8" />
                    <path d="M190 140h8" />
                    <path d="M81 157h8" />
                    <path d="M93 157h8" />
                    <path d="M106 157h54" />
                    <path d="M165 157h8" />
                    <path d="M177 157h8" />
                    <path d="M190 157h8" />
                    <path d="M136 271c74.558 0 135-60.442 135-135 0-54.758-32.602-101.902-79.454-123.08C174.606 5.263 155.8 1 136 1 61.442 1 1 61.442 1 136c0 74.558 60.442 135 135 135z" />
                  </g>
                </svg>
              </div>
              <div className="dev-feature__text">
                <h3>Development</h3>
                <p>
                  Mit Hilfe modernster Technologien werden aus statischen
                  Konzepten und Screendesigns lebendige Webseiten & Apps für
                  Smartphones, Tablets und Desktops geschaffen.
                </p>

                <button
                  aria-controls="dev-technologies"
                  className="toggle-btn text-btn text-btn--small js-rb-live"
                  data-module="panelbutton"
                >
                  über Technologien
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="itemscroller-pagination"></div>
      </div>

      <div
        id="dev-technologies"
        className="dev-technologies rb-panel js-rb-live"
        data-module="panel"
      >
        <div className="flx-group flx-group--centered">
          <div className="flx--6°md ">
            <h3>Technologien</h3>
            <p>
              Ich bin auf die FrontEnd Entwicklung von Webseiten mit modernen
              Webstandards spezialisiert, dabei setze ich unter anderem folgende
              Technologien ein:
            </p>
          </div>
        </div>
        <ul className="dev-technologies__list flx-group flx-group--centered">
          <li className="flx--4°xs flx--2°sm html5">HTML5 & CSS3</li>
          <li className="flx--4°xs flx--2°sm es6">JavaScript / ES6</li>
          <li className="flx--4°xs flx--2°sm react">React + React Native</li>
          <li className="flx--4°xs flx--2°sm sass">SASS / SCSS</li>
          <li className="flx--4°xs flx--2°sm nodejs">NodeJS</li>
          <li className="flx--4°xs flx--2°sm webpack">Webpack</li>
        </ul>
      </div>
    </Section>
  )
}
