import React from 'react'
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native'

export interface Item
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  readonly color: string
  readonly itemSize: number
  readonly shadow: boolean
  readonly Component?: React.ReactChildren
}
