import { ViewProps } from 'react-native'

import { Animate, MarkerType } from '../types'

export interface Marker extends ViewProps {
  readonly animate?: Animate
  readonly color: string
  readonly size: number
  readonly display: 'adjust' | 'contrast' | string
  readonly type: MarkerType
}
