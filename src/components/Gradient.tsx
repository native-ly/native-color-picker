import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { Gradient as GradientProps } from '../interfaces'

import { mixin } from '../helpers'

export const Gradient = styled(LinearGradient)`
  ${mixin}

  z-index: -1;

  ${({ size }: GradientProps) => `
    border-radius: ${size / 2}px;
  `}
`
