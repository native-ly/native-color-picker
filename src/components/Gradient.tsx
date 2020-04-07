import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { GradientProps } from '../interfaces'

export const Gradient: React.FC<GradientProps> = ({ colors, style, size }) => (
  <LinearGradient
    colors={colors}
    style={StyleSheet.flatten([
      style,
      {
        ...StyleSheet.absoluteFillObject,
        borderRadius: size / 2,
        zIndex: -1,
      },
    ])}
  />
)
