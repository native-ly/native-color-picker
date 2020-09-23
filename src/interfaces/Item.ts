import React from 'react'
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native'

// TODO

// export interface Item extends TouchableOpacityProps, TouchableNativeFeedbackProps {
export interface Item extends TouchableOpacityProps {
  readonly color: string
  readonly itemSize: number
  readonly shadow: boolean
  readonly Component?: React.ReactChildren
}
