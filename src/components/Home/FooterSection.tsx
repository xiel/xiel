import React from 'react'

interface Props {}

export default function FooterSection(props: Props) {
  return (
    <footer className="section section--imprint">
      <div className="container">
        <div className="flx-group flx-group--centered">
          <div className="flx--12°sm">
            <ul className="btn-group btn-group--center">
              <li>
                <span className="label">
                  Projekt- und Kooperationsanfragen an:
                </span>
                <a href="mailto:felix@xiel.de" className="cta-btn">
                  felix@xiel.de
                </a>
              </li>
            </ul>
          </div>
          <div className="flx--12°sm">
            <ul className="sm-links flx-group flx-group--centered">
              <li>
                <a
                  href="http://twitter.com/xiel"
                  target="_blank"
                  className="sm-link sm-link--twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/xiel"
                  target="_blank"
                  className="sm-link sm-link--github"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/xiel"
                  target="_blank"
                  className="sm-link sm-link--dribbble"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="http://instagram.com/xiel"
                  target="_blank"
                  className="sm-link sm-link--instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flx-group flx-group--centered">
          <div className="flx--6°sm flx--6°md">
            <div className="legal-links">
              <ul>
                <li>
                  <a href="http://xiel.de" title="Startseite">
                    XIEL webdevelopment
                  </a>
                </li>
                <li>
                  <a href="/impressum/">Datenschutz & Impressum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
