import { FlatListProps } from 'react-native'

export interface Props extends FlatListProps<string> {
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
