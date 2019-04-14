import { ViewProps } from 'react-native'

export interface Marker extends ViewProps {
  readonly color: string
  readonly size: number
  readonly markerStyle: string
  readonly type: 'border' | 'checkmark' | 'fade' | 'none'
}
