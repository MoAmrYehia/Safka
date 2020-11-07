import React, { FC } from 'react'
import styled, { CSSProperties } from 'styled-components'

const Icons: any = {
  smileyFace: (
    <g>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#D2D2D2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
        stroke="#D2D2D2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9H9.01"
        stroke="#D2D2D2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 9H15.01"
        stroke="#D2D2D2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  ),
}

interface Props {
  name: string
  fill?: string
  stroke?: string
  width?: string
  height?: string | number
  viewBox?: string
  strokeWidth?: string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
  style?: CSSProperties
  className?: string
}

export const Icon: FC<Props> = ({
  name = '',
  height = '24px',
  width = '24px',
  fill = 'none',
  stroke = 'var(--grey)',
  strokeWidth = '1.5',
  strokeLinecap = 'round',
  viewBox = `0 0 ${24} ${24}`,
  className,
  style,
}) => {
  return (
    <SVG
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name]}
    </SVG>
  )
}

const SVG = styled.svg`
  vertical-align: middle;
  margin-right: 5px;
`
