import Richtext from '../atoms/Typo/Richtext'
import { GridItem, GridRow } from '../components/Layout/Grid'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

export default function Impressum() {
  return (
    <Layout>
      <SEO
        title="Impressum & Datenschutz"
        meta={[{ name: 'robots', content: 'noindex,nofollow' }]}
      />
      <GridRow justify="center">
        <GridItem col={[12, 10, 8]} lang="de">
          <Richtext>
            <h3>Impressum</h3>
            <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

            <div itemScope itemType="http://schema.org/LocalBusiness">
              <h4 itemProp="name">Felix Leupold</h4>
              <p>Freiberuflicher Software-Entwickler</p>
              <div
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <div itemProp="streetAddress">Sonnenallee 162</div>
                <div>
                  <span itemProp="postalCode">12059</span>{' '}
                  <span itemProp="addressLocality">Berlin</span>
                </div>
                <div itemProp="addressCountry">Deutschland</div>
              </div>
              <p>
                E-Mail:{' '}
                <a href="mailto:felix@xiel.de" itemProp="email">
                  felix@xiel.de
                </a>
              </p>
            </div>

            <h4>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
            <p>Felix Leupold, Anschrift wie oben</p>

            <h4>Haftung für Inhalte</h4>
            <p>
              Ich erstelle die Inhalte dieser Website mit Sorgfalt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme
              ich jedoch keine Gewähr. Als Diensteanbieter bin ich nach den
              allgemeinen Gesetzen für eigene Inhalte verantwortlich.
            </p>

            <h4>Haftung für Links</h4>
            <p>
              Diese Website enthält Links zu externen Websites, zum Beispiel
              GitHub und LinkedIn. Auf deren Inhalte habe ich keinen Einfluss.
              Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Wenn
              mir Rechtsverletzungen bekannt werden, entferne ich die
              betreffenden Links umgehend.
            </p>

            <h4>Bildnachweis</h4>
            <p>
              Bühnenbild Startseite:{' '}
              <a href="https://images.nasa.gov/details-PIA04921.html">
                NASA/JPL/California Institute of Technology
              </a>
            </p>

            <h3>Datenschutzerklärung</h3>
            <p>
              Diese Datenschutzerklärung informiert Sie darüber, welche
              personenbezogenen Daten beim Besuch dieser Website verarbeitet
              werden, zu welchem Zweck und auf welcher Rechtsgrundlage. Sie gilt
              für die Website xiel.dev.
            </p>

            <h4>Verantwortlicher</h4>
            <p>
              Felix Leupold, Sonnenallee 162, 12059 Berlin, Deutschland
              <br />
              E-Mail: <a href="mailto:felix@xiel.de">felix@xiel.de</a>
            </p>

            <h4>Kurz gesagt</h4>
            <p>
              Diese Website setzt keine Cookies, verwendet keine Analyse- oder
              Tracking-Dienste und bindet keine Inhalte Dritter ein. Es werden
              nur die Daten verarbeitet, die technisch nötig sind, um die
              Website auszuliefern.
            </p>

            <h4>Hosting und Server-Logfiles</h4>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA, gehostet. Bei jedem Aufruf der Website
              verarbeitet Vercel automatisch technische Daten, die Ihr Browser
              übermittelt. Dazu gehören:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Abrufs</li>
              <li>aufgerufene Seite oder Datei</li>
              <li>übertragene Datenmenge und HTTP-Statuscode</li>
              <li>Browsertyp, Browserversion und Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
            </ul>
            <p>
              Diese Daten sind nötig, um die Website auszuliefern und ihre
              Sicherheit und Stabilität zu gewährleisten, zum Beispiel zur
              Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO. Mein berechtigtes Interesse liegt in einer sicheren und
              funktionsfähigen Website. Die Logdaten werden gelöscht, sobald sie
              für diese Zwecke nicht mehr erforderlich sind.
            </p>
            <p>
              Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art.
              28 DSGVO. Dabei kann eine Übermittlung von Daten in die USA
              stattfinden. Vercel ist nach dem EU-US Data Privacy Framework
              zertifiziert. Die Übermittlung erfolgt daher auf Grundlage des
              Angemessenheitsbeschlusses der EU-Kommission (Art. 45 DSGVO).
              Weitere Informationen finden Sie in der{' '}
              <a href="https://vercel.com/legal/privacy-policy">
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>

            <h4>Schriftarten</h4>
            <p>
              Diese Website verwendet die Schriftart Inter. Die Schriftdateien
              werden über den eigenen Server dieser Website ausgeliefert. Ihr
              Browser baut dabei keine Verbindung zu Servern von Google oder
              anderen Drittanbietern auf.
            </p>

            <h4>Kontakt per E-Mail</h4>
            <p>
              Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre
              E-Mail-Adresse und die Angaben aus Ihrer Nachricht, um Ihre
              Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO, wenn Ihre Anfrage auf einen Vertrag zielt, und sonst Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
              von Anfragen). Ich lösche die Daten, sobald sie nicht mehr
              erforderlich sind, es sei denn, gesetzliche Aufbewahrungspflichten
              stehen dem entgegen.
            </p>

            <h4>Externe Links</h4>
            <p>
              Diese Website enthält Links zu externen Angeboten, zum Beispiel
              GitHub und LinkedIn. Erst wenn Sie einen solchen Link anklicken,
              werden Daten an den jeweiligen Anbieter übermittelt. Dafür gilt
              die Datenschutzerklärung des jeweiligen Anbieters.
            </p>

            <h4>Ihre Rechte</h4>
            <p>Sie haben nach der DSGVO das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Widerspruch gegen eine Verarbeitung, die auf Art. 6 Abs. 1 lit.
                f DSGVO beruht (Art. 21 DSGVO)
              </li>
            </ul>
            <p>
              Für Ihre Anfrage genügt eine E-Mail an{' '}
              <a href="mailto:felix@xiel.de">felix@xiel.de</a>.
            </p>
            <p>
              Sie haben außerdem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
              Zuständig ist die Berliner Beauftragte für Datenschutz und
              Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.
            </p>

            <p>Stand: November 2026</p>
          </Richtext>
        </GridItem>
      </GridRow>
    </Layout>
  )
}
