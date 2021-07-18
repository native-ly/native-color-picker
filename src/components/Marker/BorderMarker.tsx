import React from 'react'
import { View, StyleSheet } from 'react-native'

import { countSize } from '../../helpers'

interface Props {
  readonly size: number
  readonly color: string
}

export const BorderMarker = ({ size, color }: Props) => (
  <View testID="border-marker" style={markerStyles({ size, color })} />
)

const markerStyles = StyleSheet.create(({ size, color }: Props) => ({
  ...StyleSheet.absoluteFillObject,
  marginTop: -(size / 2 - 2),
  marginLeft: -(size / 2 - 2),
  borderRadius: (size - 2 * countSize(size)) / 2,
  borderWidth: countSize(size),
  borderColor: color,
  width: size - 4,
  height: size - 4,
}))
