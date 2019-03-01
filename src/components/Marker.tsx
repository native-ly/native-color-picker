import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const mixin = `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

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

export const Marker = ({ type, size }): JSX.Element => {
  return type === 'border' ? (
    <BorderMark size={size} />
  ) : type === 'checkmark' ? (
    <Base>
      <Ionicons name="md-checkmark" size={(size / 3) * 2} color="#fff" />
    </Base>
  ) : (
    type === 'fade' && <FadeMark />
  )
}
