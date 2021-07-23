import { ViewProps } from 'react-native'
import { FontType } from 'native-icons'

type Animate = 'scale' | 'rotate'
type MarkerDisplay = 'adjust' | 'contrast' | string
type MarkerType = 'border' | 'icon' | 'fade' | 'none'

export interface Marker extends ViewProps {
  readonly color: string
  readonly size: number
  readonly animate?: Animate
  readonly markerDisplay?: MarkerDisplay
  readonly markerType?: MarkerType
  readonly iconName?: string
  readonly iconType?: FontType
}
