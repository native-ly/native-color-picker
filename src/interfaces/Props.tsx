import { FlatListProps, TouchableOpacityProps, ViewProps } from 'react-native'
import { LinearGradientProps } from 'expo'

export default interface Props extends FlatListProps<any> {
  readonly colors: string[]
  readonly columns?: number
  readonly gradient?: boolean
  readonly horizontal?: boolean
  readonly itemSize?: number
  readonly marker?: 'border' | 'checkmark' | 'fade' | 'none'
  readonly markerStyle?: 'adjust' | 'contrast' | string
  readonly onSelect?: (item: string) => void
  readonly selectedColor?: string
  readonly shadow?: boolean
  readonly sort?: boolean
}

export interface ItemProps extends TouchableOpacityProps {
  color: string
  itemSize: number
  shadow: boolean
}

export interface GradientProps extends LinearGradientProps {
  size: number
}

export interface FadeMarkerProps extends ViewProps {
  size: number
}

export interface BorderMarkerProps extends FadeMarkerProps {
  color: string
}
