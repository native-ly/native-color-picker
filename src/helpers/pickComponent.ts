import type React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

// TODO return type
export const pickComponent = (
  Component?: typeof React.Children
): React.ElementType => {
  return Component || Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity;
};
