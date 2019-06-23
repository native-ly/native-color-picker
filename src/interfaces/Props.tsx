import { FlatListProps } from 'react-native'

import { Animate, Marker, MarkerStyle } from '../types'

export interface Props extends FlatListProps<string> {
  readonly animate?: Animate
  readonly colors: string[]
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
  readonly marker?: Marker
  readonly markerStyle?: MarkerStyle
  readonly onSelect?: (item: string) => void
  readonly selectedColor?: string
  readonly shadow?: boolean
  readonly sort?: boolean
}
