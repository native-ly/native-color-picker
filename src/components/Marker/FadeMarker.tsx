import React from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
  readonly size: number
}

export const FadeMarker: React.FC<Props> = ({ size }) => (
  <View
    testID="fade-marker"
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#fff8',
      width: size,
      height: size,
      marginTop: -(size / 2),
      marginLeft: -(size / 2),
      borderRadius: size / 2,
    }}
  />
)
