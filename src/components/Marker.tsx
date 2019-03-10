import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import { mixin } from '../helpers/mixin'

const Base = styled.View`
  ${mixin}

  display: flex;
  align-items: center;
  justify-content: center;
`

const BorderMark = styled.View`
  ${mixin}

  margin: 3px;

  ${({ color, size }) => `
    border-radius: ${(size - 6) / 2}px;
    border: ${Math.round(size / 20)}px solid ${color};
  `}
`

const FadeMark = styled.View`
  ${mixin}

  background-color: #fff8;

  ${({ size }) => `
    border-radius: ${size / 2}px;
  `}
`

export const Marker = ({ type, size, isDark }): JSX.Element => {
  let contrast: string = isDark ? '#fff' : '#000'

  return type === 'border' ? (
    <BorderMark color={contrast} size={size} />
  ) : type === 'checkmark' ? (
    <Base>
      <Ionicons color={contrast} name="md-checkmark" size={(size / 3) * 2} />
    </Base>
  ) : (
    type === 'fade' && <FadeMark size={size} />
  )
}
