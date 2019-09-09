import React from 'react'
import { spaceTop } from '../../Layout/Spacer'
import Icon from '../../../atoms/Icon'
import { GridItem } from '../../Layout/Grid'
import { css } from '@emotion/core'
import { Theme } from '../../../styles/theme'
import RatioBox from '../../Layout/RatioBox'

const techTeaserInner = (theme: Theme) => css`
  border-radius: 2rem;
  background: #f7f7f7;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
`

const techLabel = css`
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
    <GridItem col={[6, 4, 4, 2]} component="li" css={spaceTop(2)}>
      <RatioBox css={techTeaserInner}>
        <Icon name={iconName} css={iconCSS} />
        <h5 css={techLabel}>{label}</h5>
      </RatioBox>
    </GridItem>
  )
}
