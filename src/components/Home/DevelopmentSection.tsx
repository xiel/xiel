import React from 'react'
import Section from '../Layout/Section'
import { GridItem, GridRow } from '../Layout/Grid'
import Icon from '../../atoms/Icon'
import TextIcon from '../../atoms/TextIcon'
import { css } from '@emotion/core'

interface Props {}

export default function DevelopmentSection(props: Props) {
  return (
    <Section>
      <GridRow justify={'center'}>
        <GridItem col={[12, 10]}>
          <h2>Modern Web Development</h2>
          <p>
            Leidenschaft für Design, Technologie und Innovation verbindet sich
            in all meinen Projekten, die ich gerne von der ersten Idee bis zur
            Veröffentlichung begleite.
          </p>
        </GridItem>
      </GridRow>
      <GridRow justify={'center'}>
        <GridItem col={[12, 10, 4]}>
          <h3>User Experience</h3>
          <p>
            Ich gestalte Produkte, die gut strukturiert, zugänglich und effektiv
            sind. Bei der Entwicklung von Ideen und Konzepten stehe ich mit
            meinen Erfahrungen zu bewährten und neuen Technologien beratend zur
            Seite.
          </p>
        </GridItem>
        <GridItem col={[12, 10, 4]}>
          <h3>Interface Design</h3>
          <p>
            Ansprechende und dennoch einfache Benutzerobflächen machen eine
            Webseite oder App intuitiv zugänglich. Und durch Responsives Design
            funktionieren Sie zukunftssicher auf allen Plattformen.
          </p>
        </GridItem>
        <GridItem col={[12, 10, 4]}>
          <h3>Development</h3>
          <p>
            Mit Hilfe modernster Technologien werden aus statischen Konzepten
            und Screendesigns lebendige Webseiten & Apps für Smartphones,
            Tablets und Desktops geschaffen.
          </p>

          <button
            aria-controls="dev-technologies"
            className="toggle-btn text-btn text-btn--small js-rb-live"
            data-module="panelbutton"
          >
            über Technologien
          </button>
        </GridItem>
      </GridRow>

      <div
        id="dev-technologies"
        className="dev-technologies rb-panel js-rb-live"
        data-module="panel"
      >
        <GridRow justify={'center'}>
          <GridItem>
            <h3>Technologien</h3>
            <p>
              Ich bin auf die FrontEnd Entwicklung von Webseiten mit modernen
              Webstandards spezialisiert, dabei setze ich unter anderem folgende
              Technologien ein:
            </p>
          </GridItem>
        </GridRow>
        <GridRow justify="center" component="ul">
          <GridItem col={2} component="li">
            HTML5 & CSS3
          </GridItem>
          <GridItem col={2} component="li">
            <Icon name={'tech-es5'} />
            JavaScript / ES6
          </GridItem>
          <GridItem col={2} component="li">
            React + React Native
          </GridItem>
          <GridItem col={2} component="li">
            SASS / SCSS
          </GridItem>
          <GridItem col={2} component="li">
            NodeJS
            <Icon name={'tech-nodejs'} />
          </GridItem>
          <GridItem col={2} component="li">
            Webpack / Jest
          </GridItem>
        </GridRow>
      </div>
    </Section>
  )
}
