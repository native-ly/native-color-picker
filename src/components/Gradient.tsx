import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import { LinearGradient } from '../imports'

import { GradientProps } from '../interfaces'

export const Gradient = memo<GradientProps>(({ style, size, ...props }) => (
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
