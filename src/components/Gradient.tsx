import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from '../imports';
import type { GradientProps } from '../types';

export const Gradient = ({ style, size, ...props }: GradientProps) => {
  const styles = getStyles({ size });

  return (
    <LinearGradient
      {...props}
      style={StyleSheet.flatten([style, styles.gradient])}
    />
  );
};

const getStyles = ({ size }: Pick<GradientProps, 'size'>) => {
  return StyleSheet.create({
    gradient: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: size / 2,
      zIndex: -1,
    },
  });
};
