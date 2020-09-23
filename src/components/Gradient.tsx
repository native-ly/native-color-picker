import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import { LinearGradient } from '../imports'

import { GradientProps } from '../interfaces'

export const Gradient = memo(({ style, size, ...props }: GradientProps) => (
  <LinearGradient
    {...props}
    style={StyleSheet.flatten([style, gradientStyles({ size })])}
  />
))

const gradientStyles = StyleSheet.create(
  ({ size }: Pick<GradientProps, 'size'>) => ({
    ...StyleSheet.absoluteFillObject,
    borderRadius: size / 2,
    zIndex: -1,
  })
)
