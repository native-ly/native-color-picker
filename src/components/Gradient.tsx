import styled from 'styled-components/native'
import { LinearGradient } from 'expo'

import { mixin } from '../helpers'

export const Gradient = styled(LinearGradient)`
  ${mixin}

  z-index: -1;

  ${({ size }: { size: number }) => `
    border-radius: ${size / 2}px;
  `}
`
