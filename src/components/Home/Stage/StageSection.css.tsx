import { css } from '@emotion/core'

export const section = css`
  position: relative;
  overflow: hidden;
  height: 30vh;

  @media (min-width: 500px) {
    height: 50vw;
    max-height: calc(100vh - 50px);
  }
`

export const introBoxWrapper = css`
  position: relative;
`
export const introBox = css`
  position: relative;
  white-space: nowrap;
  z-index: 2;
  padding: 1.4rem 2rem;

  @media (min-width: 500px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
export const introBoxBackground = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  background: linear-gradient(
    45deg,
    hsla(206, 37%, 25%, 0.75),
    hsla(206, 24%, 13%, 0.75)
  );
  box-shadow: 0 1rem 2rem -0.5rem #000;
  z-index: -1;
`
export const introBoxInner = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: perspective(600px) translateZ(1px);

  @media (min-width: 500px) {
    flex-direction: row;
  }
`
export const introTextCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.5);

  @media (min-width: 500px) {
    text-align: left;
    align-items: flex-start;
  }
`
export const introText = css`
  color: hsla(215, 25%, 54%, 1);
`
export const avatarCSS = css`
  align-self: center;
  flex: 1 0 auto;
  width: 7rem;
  max-width: 150px;
  border-radius: 1rem;
  box-shadow: black 0 0.25rem 1.6rem -0.6rem;
  margin: 0 0 1.6em 0;

  @media (min-width: 500px) {
    margin: 0 1.6rem 0 -1%;
  }
`
