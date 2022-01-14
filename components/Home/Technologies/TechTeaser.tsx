import { css } from '@emotion/react'
import React from 'react'

import Icon from '../../../atoms/Icon'
import { XTheme } from '../../../styles/theme'
import { GridItem } from '../../Layout/Grid'
import RatioBox from '../../Layout/RatioBox'
import { spaceTop } from '../../Layout/Spacer'

const techTeaserInner = (_theme: XTheme) => css`
  border-radius: 2rem;
  background: #f7f7f7;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);

  &:hover h5 {
    display: block;
  }
`

const techLabel = (theme: XTheme) => css`
  display: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0.25em 1em;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: #fff;
  background: rgba(70, 70, 70, 0.95);
  background: #333;
  white-space: nowrap;
  border-radius: 1em;
  transform: translate(-50%, 50%);
  box-shadow: 0 0.25rem 0.5rem -0.25rem rgba(0, 0, 0, 0.3);

  @media (min-width: ${theme.screenMd}px) {
    display: block;
  }
`

const iconCSS = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  margin: auto;
  width: 80%;
  height: 80%;
`

interface Props {
  label: React.ReactNode
  iconName: string
}

export default function TechTeaser({ label, iconName }: Props) {
  return (
    <GridItem col={[4, 2, 2, 2]} component="li" css={spaceTop(2)}>
      <RatioBox css={techTeaserInner}>
        <Icon name={iconName} css={iconCSS} />
        <h5 css={techLabel}>{label}</h5>
      </RatioBox>
    </GridItem>
  )
}
