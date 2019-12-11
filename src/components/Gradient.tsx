import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { GradientProps } from '../interfaces'

export const Gradient = ({ colors, style, size }: GradientProps) => (
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
