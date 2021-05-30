import { FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { ItemProps, MarkerProps, GradientProps } from '.'

// TODO
export interface Props
  extends Omit<FlatListProps<string>, 'data' | 'renderItem'> {
  readonly colors: string[]
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
  onSelect?: (item: string) => void
  readonly selectedColor?: string
  readonly shadow?: boolean
  readonly sort?: boolean
  readonly itemProps?: ItemProps
  readonly itemStyle?: StyleProp<ViewStyle>
  readonly markerProps?: MarkerProps
  readonly markerStyle?: StyleProp<ViewStyle>
  readonly linearGradientProps?: GradientProps
  readonly linearGradientStyle?: StyleProp<ViewStyle>
  readonly multiSelect?: boolean
}

// TODO
type SingleSelect = {
  readonly selectedColor?: string
  readonly multiSelect?: false
}

// TODO
type MultiSelect = {
  readonly selectedColors?: string[]
  readonly multiSelect?: true
}
