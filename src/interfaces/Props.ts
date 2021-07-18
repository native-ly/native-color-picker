import { FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { ItemProps, MarkerProps, GradientProps } from '.'

type Shadow = 'inset' | 'offset' | 'both'

interface ColorSchema {
  readonly color: string
  readonly readOnly?: boolean
  // readonly selectionMode?: any
  readonly gradient?: boolean
  readonly shadow?: boolean
}

export type Colors = string[] | ColorSchema[]

// TODO
interface BaseProps extends Omit<FlatListProps<any>, 'data' | 'renderItem'> {
  // interface BaseProps extends Omit<FlatListProps<Colors>, 'data' | 'renderItem'> {
  readonly colors: Colors
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
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

// TODO
interface SingleSelect {
  readonly selectedColor?: string
  readonly multiSelect?: false
}

// TODO
interface MultiSelect {
  readonly selectedColors?: string[]
  readonly multiSelect?: true
}

interface ReadOnly {
  readonly readOnly: true
}

interface Writable {
  readonly readOnly: false
  onSelect?: (item: string) => void
  readonly multiSelect?: boolean
}

export type Props = BaseProps &
  (SingleSelect | MultiSelect) &
  (ReadOnly | Writable)
