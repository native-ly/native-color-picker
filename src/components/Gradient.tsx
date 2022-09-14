import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { GradientProps } from 'src/types';

export const Gradient = ({ style, size, ...props }: GradientProps) => {
  const styles = getStyles({ size });

  return (
    <LinearGradient
      {...props}
      style={StyleSheet.flatten([style, styles.gradient])}
    />
  );
};

// TODO
const getStyles = ({ size }: Pick<GradientProps, 'size'>) => {
  return StyleSheet.create({
    gradient: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: size / 2,
      zIndex: -1,
    },
  });
};

// const gradientStyles = StyleSheet.create(
//   ({ size }: Pick<GradientProps, 'size'>) => ({
//     ...StyleSheet.absoluteFillObject,
//     borderRadius: size / 2, // TODO?
//     zIndex: -1,
//   })
// )
