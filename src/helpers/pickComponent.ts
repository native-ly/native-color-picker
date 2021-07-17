import React from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

export const pickComponent = (
  Component?: React.ReactChildren
): React.ElementType => {
  return Component || Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity
}
