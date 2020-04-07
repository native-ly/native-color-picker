import {
  FlatListProps,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { LinearGradientProps } from 'expo-linear-gradient'

import { MarkerDisplay } from '../types'

import { Animate, MarkerType } from '../enums'

export interface Props
  extends Omit<FlatListProps<string>, 'data' | 'renderItem'> {
  readonly animate?: typeof Animate
  readonly colors: string[]
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
  readonly markerDisplay?: MarkerDisplay
  readonly markerType?: typeof MarkerType
  readonly onSelect?: (item: string) => void
  readonly selectedColor?: string
  readonly shadow?: boolean
  readonly sort?: boolean
  readonly itemProps?: TouchableOpacityProps
  readonly itemStyle?: StyleProp<ViewStyle>
  readonly linearGradientProps?: LinearGradientProps
  readonly linearGradientStyle?: StyleProp<ViewStyle>
}
