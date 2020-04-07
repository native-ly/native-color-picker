import { ViewProps } from 'react-native'

import { MarkerDisplay } from '../types'

import { Animate, MarkerType } from '../enums'

export interface Marker extends ViewProps {
  readonly animate?: Animate
  readonly color: string
  readonly size: number
  readonly display: MarkerDisplay
  readonly type: MarkerType
}
