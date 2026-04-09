import { css } from '@emotion/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import SocialLinkList from '../../atoms/SocialLinkList'
import portraitImg from '../../public/about/portrait-felix-leupold-2024-square.jpg'
import stageImg from '../../public/stage/deepspace-stage.jpg'
import IridescentCanvas from './IridescentCanvas'

interface FocusItem {
  Title: string
  Text: string
}

interface ProjectItem {
  Title: string
  Tag: string
  Description: string
  Href: string
}

interface PrincipleItem {
  Title: string
  Text: string
}

const page = css`
  --page-text: #f7f8fb;
  --page-muted: rgba(216, 227, 235, 0.72);
  --page-muted-strong: rgba(236, 244, 249, 0.9);
  --page-line: rgba(205, 233, 244, 0.16);
  --page-ice: #befff4;
  --page-aqua: #7ce2d7;
  --page-blue: #8eb7ff;
  --page-violet: #c0a8ff;
  --page-pearl: #fff4ea;
  --page-amber: #ffb56e;
  --page-shadow: 0 30px 90px rgba(1, 8, 14, 0.28);
  position: relative;
  overflow: clip;
  color: var(--page-text);
  background:
    radial-gradient(circle at 12% 10%, rgba(124, 226, 215, 0.12), transparent 28%),
    radial-gradient(circle at 86% 14%, rgba(255, 181, 110, 0.11), transparent 24%),
    linear-gradient(180deg, #091017 0%, #08131c 34%, #091218 100%);
`

const sectionContainer = css`
  position: relative;
  width: min(1320px, calc(100vw - 2rem));
  margin: 0 auto;

  @media (min-width: 768px) {
    width: min(1320px, calc(100vw - 3rem));
  }
`

const floatingBeam = css`
  position: absolute;
  inset: auto auto 16% -10%;
  width: 48%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.22),
    rgba(124, 226, 215, 0.4),
    transparent
  );
  filter: blur(0.2px);
  opacity: 0.8;
`

const hero = css`
  position: relative;
  min-height: 100svh;
  padding: 8rem 0 5rem;

  @media (min-width: 900px) {
    padding-top: 8.75rem;
  }
`

const heroFrame = css`
  position: relative;
  display: grid;
  gap: 2rem;
  padding: 1.5rem 0 0;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
    align-items: center;
    padding: 2rem 0 0;
  }
`

const heroMain = css`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.25rem;
  padding: 0 0 2rem;

  @media (min-width: 1024px) {
    padding: 2rem 0 4rem;
  }
`

const eyebrow = css`
  margin: 0;
  color: var(--page-ice);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

const heroName = css`
  margin: 0;
  max-width: 8ch;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(3.3rem, 9vw, 7.9rem);
  line-height: 0.88;
  letter-spacing: -0.09em;
  text-wrap: balance;
`

const heroStatement = css`
  margin: 0;
  max-width: 11ch;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.5rem, 3vw, 3.25rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: var(--page-muted-strong);
  text-wrap: balance;
`

const heroLead = css`
  margin: 0;
  max-width: 42rem;
  color: var(--page-muted);
  font-size: 1.06rem;
  line-height: 1.78;
`

const ctaRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  padding-top: 0.4rem;
`

const actionLink = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 234, 245, 0.16);
  color: var(--page-text);
  font-size: 0.95rem;
  font-weight: 650;
  letter-spacing: 0.01em;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
    rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    border-color: rgba(190, 255, 244, 0.32);
    box-shadow: 0 14px 36px rgba(124, 226, 215, 0.12);
  }
`

const primaryAction = css`
  border-color: rgba(190, 255, 244, 0.42);
  color: #041116;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(227, 255, 250, 0.92)),
    linear-gradient(135deg, var(--page-ice), rgba(142, 183, 255, 0.9));
  box-shadow: 0 18px 45px rgba(134, 231, 223, 0.22);
`

const availability = css`
  margin: 0;
  color: var(--page-muted-strong);
  font-size: 0.95rem;
`

const signalStrip = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

const signalPill = css`
  padding: 0.68rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
    rgba(255, 255, 255, 0.025);
  color: var(--page-muted-strong);
  font-size: 0.88rem;
`

const heroDivider = css`
  width: min(12rem, 28vw);
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(190, 255, 244, 0.76),
    rgba(190, 255, 244, 0.08)
  );
`

const heroStage = css`
  position: relative;
  z-index: 1;
  min-height: 31rem;
  perspective: 1400px;

  @media (min-width: 1024px) {
    min-height: 42rem;
  }
`

const orbScene = css`
  position: relative;
  width: 100%;
  min-height: inherit;
  transform-style: preserve-3d;
`

const stageBackdrop = css`
  position: absolute;
  inset: 8% 4% 11% 12%;
  overflow: hidden;
  border-radius: 38% 62% 46% 54% / 48% 38% 62% 52%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.03);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 30px 80px rgba(4, 10, 16, 0.24);
  backdrop-filter: blur(24px) saturate(1.15);
  transform: rotate(-10deg) translateZ(-18px);
`

const stageFrame = css`
  position: absolute;
  inset: 6% 0 8% 12%;
  transform: rotateY(-14deg) rotateX(8deg) translateZ(-10px);

  &::before,
  &::after {
    position: absolute;
    content: '';
    border-color: rgba(207, 233, 243, 0.14);
    border-style: solid;
  }

  &::before {
    inset: 0 18% 18% 0;
    border-width: 1px 0 0 1px;
    border-top-left-radius: 2.4rem;
  }

  &::after {
    inset: 18% 0 0 26%;
    border-width: 0 1px 1px 0;
    border-bottom-right-radius: 2.8rem;
  }
`

const pearlHalo = css`
  position: absolute;
  top: 12%;
  right: 2%;
  width: min(34rem, 78vw);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 28% 30%, rgba(255, 255, 255, 0.96), transparent 22%),
    radial-gradient(circle at 36% 34%, rgba(250, 241, 255, 0.95), rgba(190, 255, 244, 0.46) 28%, rgba(142, 183, 255, 0.2) 54%, rgba(255, 255, 255, 0.02) 72%),
    conic-gradient(from 120deg, rgba(255, 190, 166, 0.6), rgba(255, 255, 255, 0.82), rgba(178, 244, 238, 0.84), rgba(188, 176, 255, 0.7), rgba(255, 190, 166, 0.6));
  filter: blur(1px) saturate(1.05);
  opacity: 0.9;
  transform: translateZ(10px);

  &::after {
    position: absolute;
    inset: 12%;
    content: '';
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.34);
    opacity: 0.46;
  }
`

const portraitWrap = css`
  position: absolute;
  right: 6%;
  top: 18%;
  width: min(24rem, 70vw);
  transform:
    rotateY(-17deg)
    rotateX(8deg)
    translateZ(78px);
`

const portraitShell = css`
  position: relative;
  overflow: hidden;
  aspect-ratio: 0.94 / 1.12;
  border-radius: 2.1rem;
  border: 1px solid rgba(236, 246, 251, 0.22);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.05)),
    rgba(255, 255, 255, 0.08);
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(20px) saturate(1.16);

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.24), transparent 22%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent 38%);
    pointer-events: none;
    z-index: 2;
  }

  img {
    object-fit: cover;
  }
`

const stageTexture = css`
  position: absolute;
  inset: auto 0 -8% auto;
  width: min(30rem, 80vw);
  opacity: 0.12;
  mix-blend-mode: screen;
  transform: rotate(-7deg) translateZ(2px);
`

const section = css`
  position: relative;
  padding: 0 0 8rem;
  scroll-margin-top: 7rem;
`

const sectionHead = css`
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (min-width: 920px) {
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
    align-items: end;
  }
`

const sectionTitle = css`
  margin: 0;
  max-width: 14ch;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2rem, 3vw, 3.55rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
`

const sectionText = css`
  margin: 0;
  max-width: 40rem;
  color: var(--page-muted);
  font-size: 1.03rem;
  line-height: 1.76;
`

const capabilitiesSurface = css`
  position: relative;
  padding: 1.6rem 0 0;

  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`

const capabilityGrid = css`
  display: grid;
  gap: 1.4rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const capabilityItem = css`
  display: grid;
  gap: 0.8rem;
  padding: 1.4rem 0;
  border-top: 1px solid rgba(207, 233, 243, 0.1);

  &:first-of-type,
  &:nth-of-type(2) {
    border-top: 0;
  }
`

const microTag = css`
  margin: 0;
  color: var(--page-amber);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

const itemTitle = css`
  margin: 0;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.55rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
`

const itemText = css`
  margin: 0;
  color: var(--page-muted);
  line-height: 1.72;
`

const projectFlow = css`
  position: relative;
  overflow: visible;
  padding: 1.6rem 0 0;
`

const projectGlow = css`
  position: absolute;
  right: -8%;
  top: -18%;
  width: min(36rem, 60vw);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 36% 34%, rgba(255, 255, 255, 0.86), transparent 20%),
    conic-gradient(from 90deg, rgba(255, 194, 176, 0.38), rgba(174, 245, 239, 0.46), rgba(188, 174, 255, 0.38), rgba(255, 194, 176, 0.38));
  opacity: 0.28;
  filter: blur(18px);
`

const projectLayout = css`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.25rem;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  }
`

const projectRail = css`
  display: grid;
  gap: 0;
`

const projectFeature = css`
  padding: 1.55rem 0;
  border-top: 1px solid rgba(207, 233, 243, 0.1);

  &:first-of-type {
    border-top: 0;
    padding-top: 0.2rem;
  }
`

const projectCompactGrid = css`
  display: grid;
  gap: 0;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const projectCompact = css`
  padding: 1.25rem 0;
  border-top: 1px solid rgba(207, 233, 243, 0.1);

  &:first-of-type {
    border-top: 0;
  }

  @media (min-width: 760px) {
    &:nth-of-type(2) {
      border-top: 0;
    }

    &:nth-of-type(odd) {
      padding-right: 1rem;
    }

    &:nth-of-type(even) {
      padding-left: 1rem;
      border-left: 1px solid rgba(207, 233, 243, 0.08);
    }
  }
`

const projectLink = css`
  display: grid;
  gap: 0.85rem;
  min-height: 100%;
  color: inherit;

  &:hover,
  &:focus {
    color: inherit;
  }
`

const projectArrow = css`
  color: var(--page-aqua);
  font-weight: 600;
`

const approachLayout = css`
  position: relative;
  overflow: visible;
  padding: 1.6rem 0 0;
`

const approachGlow = css`
  position: absolute;
  left: -10%;
  bottom: -28%;
  width: min(28rem, 54vw);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 36% 34%, rgba(255, 255, 255, 0.76), transparent 18%),
    conic-gradient(from 180deg, rgba(255, 190, 166, 0.26), rgba(174, 245, 239, 0.34), rgba(188, 174, 255, 0.26), rgba(255, 190, 166, 0.26));
  opacity: 0.28;
  filter: blur(18px);
`

const approachInner = css`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;

  @media (min-width: 1040px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }
`

const storySurface = css`
  position: relative;
  overflow: hidden;
  padding: 1.25rem 0 1.4rem;

  @media (min-width: 900px) {
    padding: 1.45rem 1.25rem 1.8rem 0;
  }
`

const storyBackdrop = css`
  position: absolute;
  inset: auto -10% -30% auto;
  width: 75%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 40% 38%, rgba(255, 255, 255, 0.86), transparent 24%),
    conic-gradient(from 40deg, rgba(255, 197, 171, 0.42), rgba(175, 245, 239, 0.42), rgba(194, 174, 255, 0.38), rgba(255, 197, 171, 0.42));
  opacity: 0.26;
  filter: blur(18px);
`

const principleList = css`
  display: grid;
  gap: 0;
`

const principleRow = css`
  padding: 1.18rem 0;
  border-top: 1px solid rgba(207, 233, 243, 0.1);

  &:first-of-type {
    border-top: 0;
  }
`

const contactWrap = css`
  position: relative;
`

const contactSurface = css`
  position: relative;
  overflow: hidden;
  padding: 1.8rem 0 0;

  @media (min-width: 900px) {
    padding-top: 2rem;
  }
`

const contactLayout = css`
  display: grid;
  gap: 1.4rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`

const contactActions = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`

export default function HomePage() {
  const { t } = useTranslation()
  const heroSignals = t('Hero.SignalStrip', { returnObjects: true }) as string[]
  const capabilities = t('Capabilities.Items', {
    returnObjects: true,
  }) as FocusItem[]
  const projects = t('Projects.Items', { returnObjects: true }) as ProjectItem[]
  const principles = t('Approach.Items', {
    returnObjects: true,
  }) as PrincipleItem[]

  const featuredProjects = projects.slice(0, 2)
  const compactProjects = projects.slice(2)

  return (
    <div css={page}>
      <section css={hero}>
        <div css={sectionContainer}>
          <div css={floatingBeam} />
          <div css={heroFrame}>
            <div css={heroMain}>
              <p css={eyebrow}>{t('Hero.Kicker')}</p>
              <h1 css={heroName}>{t('Hero.Name')}</h1>
              <p css={heroStatement}>{t('Hero.Statement')}</p>
              <div css={heroDivider} />
              <p css={heroLead}>{t('Hero.Lead')}</p>
              <div css={ctaRow}>
                <a css={[actionLink, primaryAction]} href="mailto:felix@xiel.de">
                  {t('Hero.PrimaryCta')}
                </a>
                <a
                  css={actionLink}
                  href="https://github.com/xiel"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t('Hero.SecondaryCta')}
                </a>
              </div>
              <p css={availability}>{t('Hero.Availability')}</p>
              <ul css={signalStrip}>
                {heroSignals.map((item) => (
                  <li css={signalPill} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div css={heroStage}>
              <div css={orbScene}>
                <div css={stageBackdrop}>
                  <IridescentCanvas />
                </div>
                <div css={stageFrame} />
                <div css={pearlHalo} />
                <div css={portraitWrap}>
                  <div css={portraitShell}>
                    <Image
                      alt={t('Hero.Name')}
                      fill
                      priority
                      sizes="(min-width: 1024px) 30vw, 82vw"
                      src={portraitImg}
                    />
                  </div>
                </div>
                <div css={stageTexture}>
                  <Image
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 24vw, 60vw"
                    src={stageImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section css={[section, sectionContainer]} id="capabilities">
        <div css={sectionHead}>
          <div>
            <p css={eyebrow}>{t('Capabilities.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Capabilities.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Capabilities.Text')}</p>
        </div>
        <div css={capabilitiesSurface}>
          <div css={capabilityGrid}>
            {capabilities.map((item) => (
              <article css={capabilityItem} key={item.Title}>
                <p css={microTag}>{item.Title}</p>
                <p css={itemText}>{item.Text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section css={[section, sectionContainer]} id="projects">
        <div css={sectionHead}>
          <div>
            <p css={eyebrow}>{t('Projects.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Projects.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Projects.Text')}</p>
        </div>
        <div css={projectFlow}>
          <div css={projectGlow} />
          <div css={projectLayout}>
            <div css={projectRail}>
              {featuredProjects.map((project) => (
                <article css={projectFeature} key={project.Title}>
                  <a
                    css={projectLink}
                    href={project.Href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p css={microTag}>{project.Tag}</p>
                    <h3 css={itemTitle}>{project.Title}</h3>
                    <p css={itemText}>{project.Description}</p>
                    <span css={projectArrow}>{t('Projects.OpenProject')}</span>
                  </a>
                </article>
              ))}
            </div>
            <div css={projectCompactGrid}>
              {compactProjects.map((project) => (
                <article css={projectCompact} key={project.Title}>
                  <a
                    css={projectLink}
                    href={project.Href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p css={microTag}>{project.Tag}</p>
                    <h3 css={itemTitle}>{project.Title}</h3>
                    <p css={itemText}>{project.Description}</p>
                    <span css={projectArrow}>{t('Projects.OpenProject')}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section css={[section, sectionContainer]} id="approach">
        <div css={sectionHead}>
          <div>
            <p css={eyebrow}>{t('Approach.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Approach.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Approach.Intro')}</p>
        </div>
        <div css={approachLayout}>
          <div css={approachGlow} />
          <div css={approachInner}>
            <article css={storySurface}>
              <div css={storyBackdrop} />
              <p css={microTag}>{t('Approach.StoryEyebrow')}</p>
              <h3 css={itemTitle}>{t('Approach.StoryTitle')}</h3>
              <p css={itemText}>{t('Approach.StoryText')}</p>
              <SocialLinkList
                css={css`
                  margin-top: 1rem;
                `}
              />
            </article>

            <div css={principleList}>
              {principles.map((item) => (
                <article css={principleRow} key={item.Title}>
                  <h3 css={itemTitle}>{item.Title}</h3>
                  <p css={itemText}>{item.Text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section css={[section, sectionContainer]} id="contact">
        <div css={contactWrap}>
          <div css={contactSurface}>
            <IridescentCanvas />
            <div css={contactLayout}>
              <div
                css={css`
                  position: relative;
                  z-index: 1;
                `}
              >
                <p css={eyebrow}>{t('Contact.Eyebrow')}</p>
                <h2 css={sectionTitle}>{t('Contact.Title')}</h2>
                <p css={sectionText}>{t('Contact.Text')}</p>
              </div>
              <div
                css={css`
                  position: relative;
                  z-index: 1;
                `}
              >
                <div css={contactActions}>
                  <a css={[actionLink, primaryAction]} href="mailto:felix@xiel.de">
                    {t('Contact.EmailLabel')}
                  </a>
                  <a
                    css={actionLink}
                    href="https://github.com/xiel"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t('Contact.GitHubLabel')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
