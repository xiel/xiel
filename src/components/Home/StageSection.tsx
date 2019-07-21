import React from 'react'
import StageImage from '../StageImage'

interface Props {}

export default function StageSection(props: Props) {
  return (
    <section
      className="section stage rb-scrolly js-rb-live"
      data-module="scrolly"
      id="stage"
    >
      <div className="stage-hero scrolly-element">
        <StageImage />
      </div>

      <div className="container">
        <div className="flx-group">
          <div className="flx--12°md">
            <div className="welcoming">
              <p>
                <em className="stage-hello">Hallo!</em>
                Ich bin Felix, freiberuflicher FrontEnd-Entwickler aus Berlin
                und entwickle effektive Webseiten und Apps, die jeder gerne
                nutzt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// I am Felix – a freelance FrontEnd web developer from Berlin.<br>
//                 HTML, CSS & JavaScript are my passion ♡
