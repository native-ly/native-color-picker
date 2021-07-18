import React from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
  readonly size: number
}

export const FadeMarker = (props: Props) => (
  <View testID="fade-marker" style={markerStyles(props)} />
)

const markerStyles = StyleSheet.create(({ size }: Props) => ({
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '#fff8',
  marginTop: -(size / 2),
  marginLeft: -(size / 2),
  borderRadius: size / 2,
  width: size,
  height: size,
}))
