import { ViewProps } from 'react-native'
import { FontType } from 'native-icons/lib/types/FontType'

import type { Animate, MarkerDisplay, MarkerType } from '../types'

export interface Marker extends ViewProps {
  readonly color?: string
  readonly size?: number
  readonly animate?: Animate
  readonly markerDisplay?: MarkerDisplay
  readonly markerType?: MarkerType
  readonly iconName?: string
  readonly iconType?: FontType
}
