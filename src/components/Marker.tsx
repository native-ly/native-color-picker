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
  border: 3px solid #fff;

  ${({ size }) => `
    border-radius: ${(size - 6) / 2}px;
  `}
`

const FadeMark = styled.View`
  ${mixin}

  background-color: #fff3;

  ${({ size }) => `
    border-radius: ${size / 2}px;
  `}
`

export const Marker = ({ type, size, isDark }): JSX.Element => {
  return type === 'border' ? (
    <BorderMark size={size} />
  ) : type === 'checkmark' ? (
    <Base>
      <Ionicons
        name="md-checkmark"
        size={(size / 3) * 2}
        color={isDark ? '#fff' : '#000'}
      />
    </Base>
  ) : (
    type === 'fade' && <FadeMark size={size} />
  )
}
