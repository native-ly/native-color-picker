import { ViewProps } from 'react-native'

export interface FadeMarker extends ViewProps {
  readonly size: number
}

export interface BorderMarker extends FadeMarker {
  readonly color: string
}
