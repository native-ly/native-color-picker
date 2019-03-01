import styled from 'styled-components'
import { LinearGradient } from 'expo'

import { mixin } from '../helpers/mixin'

export const Gradient = styled(LinearGradient)`
  ${mixin}

  z-index: -1;

  ${({ size }) => `
    border-radius: ${size / 2}px;
  `}
`
