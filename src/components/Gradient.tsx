import React from 'react'
import { StyleSheet } from 'react-native'

import { LinearGradient } from '../imports'

import { GradientProps } from '../interfaces'

export const Gradient: React.FC<GradientProps> = ({
  style,
  size,
  ...props
}) => (
  <LinearGradient
    {...props}
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
