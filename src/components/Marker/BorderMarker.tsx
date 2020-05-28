import React from 'react'
import { View, StyleSheet } from 'react-native'

import { countSize } from '../../helpers'

interface Props {
  readonly size: number
  readonly color: string
}

export const BorderMarker: React.FC<Props> = ({ size, color }) => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      width: size - 4,
      height: size - 4,
      marginTop: -(size / 2 - 2),
      marginLeft: -(size / 2 - 2),
      borderRadius: (size - 2 * countSize(size)) / 2,
      borderWidth: countSize(size),
      borderColor: color,
    }}
  />
)
