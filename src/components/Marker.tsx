import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import Color from 'color'

import { BorderMarkerProps, FadeMarkerProps } from '../interfaces/Props'

import { mixin, checkColor, countSize } from '../helpers'

const Base = styled.View`
  ${mixin}

  display: flex;
  align-items: center;
  justify-content: center;
`

const BorderMarker = styled.View`
  ${mixin}

  ${({ color, size }: BorderMarkerProps) => `
    margin: ${countSize(size)}px;
    border-radius: ${(size - 2 * countSize(size)) / 2}px;
    border: ${countSize(size)}px solid ${color};
  `}
`

const FadeMarker = styled.View`
  ${mixin}

  background-color: #fff8;

  ${({ size }: FadeMarkerProps) => `
    border-radius: ${size / 2}px;
  `}
`

export const Marker = ({
  color,
  size,
  markerStyle,
  type,
}): JSX.Element => {
  if (markerStyle === 'adjust') {
    color = checkColor(color)
  } else if (markerStyle === 'contrast') {
    color = Color(color).isDark() ? '#fff' : '#000'
  } else {
    color = markerStyle
  }

  return type === 'border' ? (
    <BorderMarker color={color} size={size} />
  ) : type === 'checkmark' ? (
    <Base>
      <Ionicons color={color} name="md-checkmark" size={(size / 3) * 2} />
    </Base>
  ) : (
    type === 'fade' && <FadeMarker size={size} />
  )
}
