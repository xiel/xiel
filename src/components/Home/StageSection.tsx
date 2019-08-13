import React from 'react'
import StageImage from '../StageImage'
import Section from '../Layout/Section'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import {
  colorTextBright,
  screenSmMax,
  screenXs,
  screenXsMax,
} from '../../styles/theme'
import Container from '../Layout/Container'

interface Props {}

export default function StageSection(props: Props) {
  const { t } = useTranslation()

  return (
    <Section
      css={css`
        position: relative;
        background: #d2d2ce;
        overflow: hidden;
        background-size: 100% auto;
        height: 50vw;
        max-height: 90vh;
        justify-content: center;
        transform: translateZ(0.00001px);
        backface-visibility: hidden;

        @media (max-width: ${screenSmMax}px) {
          padding-top: 80px;
        }

        @media (max-width: ${screenXsMax}px) {
          height: auto;

          .btn {
            width: 100%;
          }
        }
      `}
    >
      <div
        className="stage-hero"
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          opacity: 1;

          //performance improvement
          will-change: transform, opacity;
          transform: translateY(0px);
          backface-visibility: hidden;

          @media (max-width: ${screenSmMax}px) {
            right: -5%;
          }
          @media (max-width: ${screenXs}px) {
            right: 0;
          }

          img {
            display: block;
            height: auto;
            width: 100%;
            margin: 0 auto;
            transform: translateY(0px);
            backface-visibility: hidden;

            @media (min-width: 2000px) {
              width: 90%;
            }

            &.lazyloaded {
              transition: opacity 2000ms;
            }
          }
        `}
      >
        <StageImage />
      </div>
      <Container>
        <div>
          <div
            className="welcoming"
            css={css`
              position: relative;
              width: 62%;
              max-width: 546px;

              @media (max-width: ${screenXs}) {
                width: auto;
                padding-bottom: 30%;
              }
            `}
          >
            <p>
              <em
                css={css`
                  position: relative;
                  display: block;
                  margin: 0 0 1rem;
                  font-size: 4rem;
                  line-height: 0.9;
                  letter-spacing: -0.03em;
                  font-weight: 500;
                  color: ${colorTextBright};
                  z-index: 1;

                  @media (max-width: ${screenXsMax}px) {
                    font-size: 2rem;
                  }
                `}
              >
                {t('StageSection.Hello')}
              </em>
              {t('StageSection.Intro')}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// I am Felix – a freelance FrontEnd web developer from Berlin.<br>
// HTML, CSS & JavaScript are my passion ♡
