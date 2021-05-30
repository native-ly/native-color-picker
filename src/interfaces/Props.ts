import { FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { ItemProps, MarkerProps, GradientProps } from '.'

type Shadow = 'inset' | 'offset' | 'both'

export interface Props
  extends Omit<FlatListProps<string>, 'data' | 'renderItem'> {
  readonly colors: string[]
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
  onSelect?: (item: string) => void
  readonly selectedColor?: string
  readonly shadow?: Shadow | boolean
  readonly sort?: boolean
  readonly itemProps?: ItemProps
  readonly itemStyle?: StyleProp<ViewStyle>
  readonly markerProps?: MarkerProps
  readonly markerStyle?: StyleProp<ViewStyle>
  readonly linearGradientProps?: GradientProps
  readonly linearGradientStyle?: StyleProp<ViewStyle>
}
