import React from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

// TODO return type
export const pickComponent = (
  Component?: React.ReactChildren
): React.ElementType => {
  return Component || Platform.OS === 'android' // TODO || -> ??
    ? TouchableNativeFeedback
    : TouchableOpacity
}
