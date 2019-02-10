import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const BorderMark = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 3px solid #fff;
  margin: 3px;
`

const FadeMark = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: #fff3;
`

export const Marker = ({ type, size }): any => {
  return type === 'border' ? (
    <BorderMark />
  ) : type === 'checkmark' ? (
    <Ionicons name="md-checkmark" size={size} />
  ) : (
    type === 'fade' && <FadeMark />
  )
}
