import { css } from '@emotion/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import SocialLinkList from '../../atoms/SocialLinkList'
import portraitImg from '../../public/about/BGray Portrait Felix Leupold 2015_square.jpg'
import stageImg from '../../public/stage/deepspace-stage.jpg'

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
  --page-text: #f3f6f7;
  --page-muted: #9cb1bb;
  --page-muted-strong: #bfd2db;
  --page-accent: #7ce2d7;
  --page-accent-strong: #1db9b0;
  --page-warm: #ffb56e;
  --page-surface: rgba(11, 23, 31, 0.68);
  --page-surface-strong: rgba(14, 29, 38, 0.92);
  --page-border: rgba(167, 214, 233, 0.16);
  --page-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  position: relative;
  color: var(--page-text);
  background:
    radial-gradient(circle at top left, rgba(124, 226, 215, 0.18), transparent 34%),
    radial-gradient(circle at top right, rgba(255, 181, 110, 0.16), transparent 30%),
    linear-gradient(180deg, #09141a 0%, #0a1218 40%, #0d181c 100%);
`

const container = css`
  position: relative;
  width: min(1280px, calc(100vw - 2.5rem));
  margin: 0 auto;

  @media (min-width: 768px) {
    width: min(1280px, calc(100vw - 4rem));
  }
`

const section = css`
  position: relative;
  padding: 0 0 7rem;
  scroll-margin-top: 7rem;

  @media (min-width: 768px) {
    padding-bottom: 9rem;
  }
`

const sectionIntro = css`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.8fr);
    align-items: end;
  }
`

const eyebrow = css`
  margin: 0;
  color: var(--page-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

const sectionTitle = css`
  margin: 0;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2rem, 3vw, 3.4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
`

const sectionText = css`
  margin: 0;
  max-width: 38rem;
  color: var(--page-muted);
  font-size: 1.02rem;
  line-height: 1.72;
`

const hero = css`
  position: relative;
  min-height: 100svh;
  padding: 8rem 0 6rem;
  overflow: clip;

  @media (min-width: 768px) {
    padding-top: 9rem;
  }
`

const heroBackdrop = css`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  &::before,
  &::after {
    position: absolute;
    content: '';
    inset: 0;
  }

  &::before {
    background:
      linear-gradient(180deg, rgba(9, 20, 26, 0.12), rgba(9, 20, 26, 0.86) 78%),
      linear-gradient(90deg, rgba(9, 20, 26, 0.84), rgba(9, 20, 26, 0.2) 58%);
  }

  &::after {
    background:
      radial-gradient(circle at 18% 18%, rgba(124, 226, 215, 0.22), transparent 26%),
      radial-gradient(circle at 82% 22%, rgba(255, 181, 110, 0.2), transparent 24%);
    mix-blend-mode: screen;
  }
`

const heroImageWrap = css`
  position: absolute;
  inset: -4rem -6rem 0 auto;
  width: min(62vw, 940px);
  opacity: 0.35;
  filter: saturate(0.95) blur(1px);
`

const heroGrid = css`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.78fr);
    align-items: end;
    gap: 2.5rem;
  }
`

const heroMain = css`
  display: grid;
  gap: 1.3rem;
  align-content: start;
`

const heroName = css`
  margin: 0;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(3rem, 8vw, 7.1rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
`

const heroStatement = css`
  margin: 0;
  max-width: 14ch;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  color: var(--page-muted-strong);
`

const heroLead = css`
  margin: 0;
  max-width: 40rem;
  color: var(--page-muted);
  font-size: 1.08rem;
  line-height: 1.8;
`

const ctaRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  padding-top: 0.4rem;
`

const actionLink = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.4rem;
  padding: 0.95rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--page-border);
  color: var(--page-text);
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    background 200ms ease,
    color 200ms ease;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    border-color: rgba(124, 226, 215, 0.35);
    background: rgba(255, 255, 255, 0.08);
  }
`

const primaryAction = css`
  border-color: rgba(124, 226, 215, 0.44);
  color: #051116;
  background: linear-gradient(135deg, var(--page-accent), #def8f4);
  box-shadow: 0 16px 40px rgba(124, 226, 215, 0.22);

  &:hover,
  &:focus {
    color: #051116;
    background: linear-gradient(135deg, #90ebe0, #f5fffd);
  }
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
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--page-muted-strong);
  font-size: 0.88rem;
  letter-spacing: 0.01em;
`

const heroAside = css`
  display: grid;
  gap: 1rem;
`

const glassCard = css`
  position: relative;
  overflow: hidden;
  border: 1px solid var(--page-border);
  border-radius: 1.7rem;
  background: linear-gradient(180deg, rgba(15, 31, 39, 0.85), rgba(8, 20, 27, 0.92));
  box-shadow: var(--page-shadow);
`

const portraitCard = css`
  display: grid;
  gap: 1.1rem;
  padding: 1rem;
`

const portraitFrame = css`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1.08;
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 20% 20%, rgba(124, 226, 215, 0.18), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));

  img {
    object-fit: cover;
    filter: grayscale(0.15) contrast(1.05);
  }
`

const portraitMeta = css`
  display: grid;
  gap: 0.55rem;

  strong {
    font-size: 1.08rem;
    font-weight: 600;
  }

  span {
    color: var(--page-muted);
    line-height: 1.6;
  }
`

const focusCard = css`
  padding: 1.35rem;
`

const focusList = css`
  display: grid;
  gap: 0.8rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
`

const focusListItem = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.7rem;
  align-items: start;
  color: var(--page-muted-strong);
  line-height: 1.55;

  &::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    margin-top: 0.45rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--page-accent), var(--page-warm));
    box-shadow: 0 0 0 0.35rem rgba(124, 226, 215, 0.08);
  }
`

const capabilitiesGrid = css`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const capabilityCard = css`
  display: grid;
  gap: 0.85rem;
  padding: 1.4rem;
`

const cardTag = css`
  color: var(--page-warm);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

const cardTitle = css`
  margin: 0;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.55rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
`

const cardText = css`
  margin: 0;
  color: var(--page-muted);
  line-height: 1.7;
`

const projectsGrid = css`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const projectCard = css`
  display: grid;
  gap: 0.85rem;
  min-height: 100%;
  padding: 1.5rem;
`

const projectLink = css`
  display: grid;
  gap: 0.85rem;
  min-height: 100%;

  &:hover,
  &:focus {
    color: inherit;
  }
`

const projectArrow = css`
  color: var(--page-accent);
  font-weight: 600;
`

const approachGrid = css`
  display: grid;
  gap: 1rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`

const approachStory = css`
  display: grid;
  gap: 1rem;
  padding: 1.6rem;
`

const principleList = css`
  display: grid;
  gap: 1rem;
`

const principleCard = css`
  padding: 1.35rem;
`

const contactCard = css`
  padding: 1.6rem;

  @media (min-width: 900px) {
    padding: 2.1rem;
  }
`

const contactGrid = css`
  display: grid;
  gap: 1.4rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) auto;
    align-items: center;
  }
`

const contactActions = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`

export default function HomePage() {
  const { t } = useTranslation()
  const heroSignals = t('Hero.SignalStrip', { returnObjects: true }) as string[]
  const heroFocus = t('Hero.FocusList', { returnObjects: true }) as string[]
  const capabilities = t('Capabilities.Items', {
    returnObjects: true,
  }) as FocusItem[]
  const projects = t('Projects.Items', { returnObjects: true }) as ProjectItem[]
  const principles = t('Approach.Items', {
    returnObjects: true,
  }) as PrincipleItem[]

  return (
    <div css={page}>
      <section css={hero}>
        <div css={heroBackdrop}>
          <div css={heroImageWrap}>
            <Image
              src={stageImg}
              alt=""
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
        <div css={[container, heroGrid]}>
          <div css={heroMain}>
            <p css={eyebrow}>{t('Hero.Kicker')}</p>
            <h1 css={heroName}>{t('Hero.Name')}</h1>
            <p css={heroStatement}>{t('Hero.Statement')}</p>
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
          <aside css={heroAside}>
            <div css={[glassCard, portraitCard]}>
              <div css={portraitFrame}>
                <Image
                  alt={t('Hero.Name')}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  src={portraitImg}
                />
              </div>
              <div css={portraitMeta}>
                <strong>{t('Hero.ProfileTitle')}</strong>
                <span>{t('Hero.ProfileText')}</span>
              </div>
            </div>
            <div css={[glassCard, focusCard]}>
              <p css={eyebrow}>{t('Hero.FocusEyebrow')}</p>
              <ul css={focusList}>
                {heroFocus.map((item) => (
                  <li css={focusListItem} key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section css={[section, container]} id="capabilities">
        <div css={sectionIntro}>
          <div>
            <p css={eyebrow}>{t('Capabilities.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Capabilities.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Capabilities.Text')}</p>
        </div>
        <div css={capabilitiesGrid}>
          {capabilities.map((item) => (
            <article css={[glassCard, capabilityCard]} key={item.Title}>
              <p css={cardTag}>{item.Title}</p>
              <p css={cardText}>{item.Text}</p>
            </article>
          ))}
        </div>
      </section>

      <section css={[section, container]} id="projects">
        <div css={sectionIntro}>
          <div>
            <p css={eyebrow}>{t('Projects.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Projects.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Projects.Text')}</p>
        </div>
        <div css={projectsGrid}>
          {projects.map((project) => (
            <article css={[glassCard, projectCard]} key={project.Title}>
              <a
                css={projectLink}
                href={project.Href}
                rel="noreferrer"
                target="_blank"
              >
                <p css={cardTag}>{project.Tag}</p>
                <h3 css={cardTitle}>{project.Title}</h3>
                <p css={cardText}>{project.Description}</p>
                <span css={projectArrow}>{t('Projects.OpenProject')}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section css={[section, container]} id="approach">
        <div css={sectionIntro}>
          <div>
            <p css={eyebrow}>{t('Approach.Eyebrow')}</p>
            <h2 css={sectionTitle}>{t('Approach.Title')}</h2>
          </div>
          <p css={sectionText}>{t('Approach.Intro')}</p>
        </div>
        <div css={approachGrid}>
          <article css={[glassCard, approachStory]}>
            <p css={cardTag}>{t('Approach.StoryEyebrow')}</p>
            <h3 css={cardTitle}>{t('Approach.StoryTitle')}</h3>
            <p css={cardText}>{t('Approach.StoryText')}</p>
            <SocialLinkList
              css={css`
                margin-top: 0.5rem;
              `}
            />
          </article>
          <div css={principleList}>
            {principles.map((item) => (
              <article css={[glassCard, principleCard]} key={item.Title}>
                <h3 css={cardTitle}>{item.Title}</h3>
                <p css={cardText}>{item.Text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section css={[section, container]} id="contact">
        <div css={[glassCard, contactCard]}>
          <div css={contactGrid}>
            <div>
              <p css={eyebrow}>{t('Contact.Eyebrow')}</p>
              <h2 css={sectionTitle}>{t('Contact.Title')}</h2>
              <p css={sectionText}>{t('Contact.Text')}</p>
            </div>
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
      </section>
    </div>
  )
}
