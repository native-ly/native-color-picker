import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native'

// export interface Item extends TouchableOpacityProps, TouchableNativeFeedbackProps {
export interface Item {
  readonly color: string
  readonly itemSize: number
  readonly shadow: boolean
  // readonly Component?: any
}
