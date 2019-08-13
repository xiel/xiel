import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import { GridItem, GridRow } from '../components/Layout/Grid'

interface Props {}

export default function Impressum(props: Props) {
  return (
    <Layout>
      <SEO
        title="Impressum"
        meta={[{ name: 'robots', content: 'noindex,nofollow' }]}
      />
      <GridRow>
        <GridItem col={[12, 10, 8]}>
          <h3>Impressum</h3>

          <div itemScope itemType="http://schema.org/LocalBusiness">
            <h4 itemProp="name">Felix Leupold</h4>
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <div itemProp="streetAddress">Sonnenallee 162</div>
              <div>
                <span itemProp="postalCode">12059</span>
                <span itemProp="addressLocality">Berlin</span>
              </div>
            </div>
            <p itemProp="email">felix@xiel.de</p>

            <h4>Haftungshinweis:</h4>
            <p>
              Keine Gewähr für Vollständigkeit und Richtigkeit. Für den Inhalt
              der Website wird keine Haftung übernommen.
            </p>

            <p>Steuernummer: 16/418/01074</p>
          </div>

          <h3>Datenschutzerklärung</h3>

          <h4>Geltungsbereich</h4>
          <p>
            Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und
            Zwecke der Erhebung und Verwendung personenbezogener Daten durch den
            verantwortlichen Anbieter Felix Leupold (Siegfriedstr. 8, 12051
            Berlin) auf dieser Website (im folgenden “Angebot”) auf.
          </p>
          <p>
            Die rechtlichen Grundlagen des Datenschutzes finden sich im
            Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
          </p>
          <h4>Zugriffsdaten/ Server-Logfiles</h4>
          <p>
            Der Anbieter (beziehungsweise sein Webspace-Provider) erhebt Daten
            über jeden Zugriff auf das Angebot (so genannte Serverlogfiles). Zu
            den Zugriffsdaten gehören:
            <br />
            <br />
            Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs,
            übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp
            nebst Version, das Betriebssystem des Nutzers, Referrer URL (die
            zuvor besuchte Seite), IP-Adresse und der anfragende Provider.
            <br />
            <br />
            Der Anbieter verwendet die Protokolldaten nur für statistische
            Auswertungen zum Zweck des Betriebs, der Sicherheit und der
            Optimierung des Angebotes. Der Anbieterbehält sich jedoch vor, die
            Protokolldaten nachträglich zu überprüfen, wenn aufgrund konkreter
            Anhaltspunkte der berechtigte Verdacht einer rechtswidrigen Nutzung
            besteht.
          </p>
          <h4>Umgang mit personenbezogenen Daten</h4>
          <p>
            Personenbezogene Daten sind Informationen, mit deren Hilfe eine
            Person bestimmbar ist, also Angaben, die zurück zu einer Person
            verfolgt werden können. Dazu gehören der Name, die Emailadresse oder
            die Telefonnummer. Aber auch Daten über Vorlieben, Hobbies,
            Mitgliedschaften oder welche Webseiten von jemandem angesehen wurden
            zählen zu personenbezogenen Daten.&nbsp;Personenbezogene Daten
            werden von dem Anbieter nur dann erhoben, genutzt und weiter
            gegeben, wenn dies gesetzlich erlaubt ist oder die Nutzer in die
            Datenerhebung einwilligen.
          </p>
          <h4>Kontaktaufnahme</h4>
          <p>
            Bei der Kontaktaufnahme mit dem Anbieter (zum Beispiel per
            Kontaktformular oder E-Mail) werden die Angaben des Nutzers zwecks
            Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen
            entstehen, gespeichert.
          </p>
          <h4>Einbindung von Diensten und Inhalten Dritter</h4>
          <p>
            Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte
            Dritter, wie zum Beispiel Videos von YouTube, Kartenmaterial von
            Google-Maps, RSS-Feeds oder Grafiken von anderen Webseiten
            eingebunden werden. Dies setzt immer voraus, dass die Anbieter
            dieser Inhalte (nachfolgend bezeichnet als "Dritt-Anbieter") die
            IP-Adresse der Nutzer wahr nehmen. Denn ohne die IP-Adresse, könnten
            sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden.
            Die IP-Adresse ist damit für die Darstellung dieser Inhalte
            erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren
            jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der
            Inhalte verwenden. Jedoch haben wir keinen Einfluss darauf, falls
            die Dritt-Anbieter die IP-Adresse z.B. für statistische Zwecke
            speichern. Soweit dies uns bekannt ist, klären wir die Nutzer
            darüber auf.
            <br />
          </p>
          <h4>Cookies</h4>
          <p>
            Cookies sind kleine Dateien, die es ermöglichen, auf dem
            Zugriffsgerät der Nutzer (PC, Smartphone o.ä.) spezifische, auf das
            Gerät bezogene Informationen zu speichern. Sie dienen zum einem der
            Benutzerfreundlichkeit von Webseiten und damit den Nutzern (z.B.
            Speicherung von Logindaten). Zum anderen dienen sie, um die
            statistische Daten der Webseitennutzung zu erfassen und sie zwecks
            Verbesserung des Angebotes analysieren zu können. Die Nutzer können
            auf den Einsatz der Cookies Einfluss nehmen. Die meisten Browser
            verfügen eine Option mit der das Speichern von Cookies eingeschränkt
            oder komplett verhindert wird. Allerdings wird darauf hingewiesen,
            dass die Nutzung und insbesondere der Nutzungskomfort ohne Cookies
            eingeschränkt werden.
            <br />
            <br />
            Sie können viele Online-Anzeigen-Cookies von Unternehmen über die
            US-amerikanische Seite&nbsp;
            <a href="http://www.aboutads.info/choices/">
              http://www.aboutads.info/choices/
            </a>
            &nbsp;oder die EU-Seite&nbsp;
            <a href="http://www.youronlinechoices.com/uk/your-ad-choices/">
              http://www.youronlinechoices.com/uk/your-ad-choices/&nbsp;
            </a>
            verwalten.
          </p>
          {/*<h4>Piwik</h4>*/}
          {/*<p>*/}
          {/*  Dieses Angebot benutzt&nbsp;*/}
          {/*  <a href="http://piwik.org/">Piwik</a>, eine Open-Source-Software*/}
          {/*  zur statistischen Auswertung der Nutzerzugriffe. Piwik verwendet*/}
          {/*  sog. “Cookies”, Textdateien, die auf dem Computer der Nutzer*/}
          {/*  gespeichert werden und die eine Analyse der Benutzung der*/}
          {/*  Website durch die Nutzer ermöglichen. Die durch den Cookie*/}
          {/*  erzeugten Informationen über die Benutzung dieses Agebotes*/}
          {/*  werden auf dem Server des Anbieters in Deutschland gespeichert.*/}
          {/*  Die IP-Adresse wird sofort nach der Verarbeitung und vor deren*/}
          {/*  Speicherung anonymisiert. Nutzer können die Installation der*/}
          {/*  Cookies durch eine entsprechende Einstellung Ihrer*/}
          {/*  Browser-Software verhindern; Der Anbieter weisen die Nutzer*/}
          {/*  jedoch darauf hin, dass sie in diesem Fall gegebenenfalls nicht*/}
          {/*  sämtliche Funktionen dieser Website vollumfänglich nutzen*/}
          {/*  können.*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  <iframe*/}
          {/*    src="//piwik.xiel.de/index.php?module=CustomOptOut&amp;action=optOut&amp;idSite=2&amp;language=de"*/}
          {/*    width="320"*/}
          {/*    height="240"*/}
          {/*  ></iframe>*/}
          {/*</p>*/}

          <h4>Widerruf, Änderungen, Berichtigungen und Aktualisierungen</h4>
          <p>
            Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft zu
            erhalten über die personenbezogenen Daten, die über ihn gespeichert
            wurden. Zusätzlich hat der Nutzer das Recht auf Berichtigung
            unrichtiger Daten, Sperrung und Löschung seiner personenbezogenen
            Daten, soweit dem keine gesetzliche Aufbewahrungspflicht
            entgegensteht.
          </p>
          <p>
            <a href="http://rechtsanwalt-schwenke.de/smmr-buch/datenschutz-muster-generator-fuer-webseiten-blogs-und-social-media/">
              Datenschutz-Muster von Rechtsanwalt Thomas Schwenke - I LAW it
            </a>
          </p>
        </GridItem>
      </GridRow>
    </Layout>
  )
}
