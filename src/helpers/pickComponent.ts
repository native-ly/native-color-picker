import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

export const pickComponent = (Component?: any): any => {
  return (
    Component ||
    (Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity)
  )
}
