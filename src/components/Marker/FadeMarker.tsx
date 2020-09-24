import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
  readonly size: number
}

export const FadeMarker = memo<Props>(({ size }) => (
  <View testID="fade-marker" style={markerStyles({ size })} />
))

const markerStyles = StyleSheet.create(({ size }: Props) => ({
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '#fff8',
  marginTop: -(size / 2),
  marginLeft: -(size / 2),
  borderRadius: size / 2,
  width: size,
  height: size,
}))
