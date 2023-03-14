import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  readonly size: number;
}

export const FadeMarker = (props: Props) => {
  const styles = getStyles(props);

  return <View testID="fade-marker" style={styles.marker} />;
};

const getStyles = ({ size }: Props) => {
  return StyleSheet.create({
    marker: {
      ...StyleSheet.absoluteFillObject,
      // backgroundColor: '#fff8', // TODO update
      // marginTop: -(size / 2), // TODO update
      // marginLeft: -(size / 2), // TODO update
      // borderRadius: size / 2, // TODO update
      width: size,
      height: size,
    },
  });
};
