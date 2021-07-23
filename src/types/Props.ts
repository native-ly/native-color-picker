import { FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { ItemProps, MarkerProps, GradientProps } from '.'

type Shadow = 'inset' | 'offset' | 'both'

// interface Renderers {
//   renderItem?: () => void
//   // renderMarker?: () => void;
//   // renderGradient?: () => void;
//   // renderInsetShadow?: () => void;
// }

// interface Callbacks {
// onSelect?: (item: string) => void
// }

interface Item {
  readonly itemProps?: ItemProps
  readonly itemStyle?: StyleProp<ViewStyle>
}

interface Marker {
  readonly markerProps?: MarkerProps
  readonly markerStyle?: StyleProp<ViewStyle>
}

interface Gradient {
  // readonly gradient: true
  readonly gradientProps?: GradientProps
  readonly gradientStyle?: StyleProp<ViewStyle>
}

// interface ReadOnly {
// readonly readOnly: boolean
// }

interface BaseType extends Item, Marker, Gradient {
  // readonly gradient?: boolean
  readonly readOnly?: boolean
  readonly shadow?: Shadow | boolean
}

interface ColorSchema extends BaseType {
  readonly color: string
  // readonly gradient?: boolean
  // readonly shadow?: boolean
}

export type Colors = string[] | ColorSchema[]

// TODO? allow columns only when not horizontal

// TODO
// TODO type any to Colors
interface BaseProps
  extends Omit<FlatListProps<any>, 'data' | 'renderItem'>,
    BaseType {
  // interface BaseProps extends Omit<FlatListProps<Colors>, 'data' | 'renderItem'> {
  readonly colors: Colors
  readonly columns?: number
  readonly horizontal?: boolean
  readonly sort?: boolean

  // readonly gradient?: boolean // TODO
  // readonly itemSize?: number // TODO
  // readonly selectedColor?: string

  // readonly readOnly?: boolean

  // readonly shadow?: Shadow | boolean // TODO
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

// interface ReadOnly {
// readonly readOnly: true
// }
//
// interface Writable {
// readonly readOnly: false
// onSelect?: (item: string) => void
// readonly multiSelect?: boolean
// }

type SelectionType = SingleSelect | MultiSelect

// type AccessType = ReadOnly | Writable

export type Props = BaseProps & SelectionType
//  & AccessType
