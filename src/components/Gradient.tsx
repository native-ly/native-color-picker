import styled from 'styled-components/native'
import { LinearGradient } from 'expo'

import { GradientProps } from '../interfaces/Props'

import { mixin } from '../helpers'

export const Gradient = styled(LinearGradient)`
  ${mixin}

  z-index: -1;

  ${({ size }: GradientProps) => `
    border-radius: ${size / 2}px;
  `}
`
