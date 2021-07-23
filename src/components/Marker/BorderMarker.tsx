import React from 'react'
import { View, StyleSheet } from 'react-native'

import { countSize } from '../../helpers'

interface Props {
  readonly size: number
  readonly color: string
}

export const BorderMarker = (props: Props) => (
  <View testID="border-marker" style={markerStyles(props)} />
)

// TODO add helper for (size / 2 - 2)
const markerStyles = StyleSheet.create(({ size, color }: Props) => ({
  ...StyleSheet.absoluteFillObject,
  marginTop: -(size / 2 - 2), // TODO update
  marginLeft: -(size / 2 - 2), // TODO update
  borderRadius: (size - 2 * countSize(size)) / 2, // TODO update
  borderWidth: countSize(size),
  borderColor: color,
  width: size - 4, // TODO update
  height: size - 4, // TODO update
}))
