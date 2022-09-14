import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'native-icons';
import Color from 'color';
import { checkColor } from 'src/helpers';
import type { MarkerProps } from 'src/types';
import { BorderMarker } from './BorderMarker';
import { FadeMarker } from './FadeMarker';

export const Marker = ({
  color,
  size,
  animate,
  markerDisplay = 'contrast',
  markerType = 'border',
  iconName = 'md-checkmark',
  iconType = 'ionicons',
  style,
  ...props
}: MarkerProps) => {
  const scale = useSharedValue(0);
  const rotate = useSharedValue(1);
  const opacity = useSharedValue(0);

  scale.value = withTiming(0, {
    duration: 300, // TODO move to const
  });

  rotate.value = withTiming(0, {
    duration: 300, // TODO move to const
  });

  opacity.value = withTiming(0, {
    duration: 300, // TODO move to const
  });

  // TODO
  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         scale: scale.value,

  //       },
  //     ],
  //   }
  // })

  // TODO? remove useMemo
  const colorValue = useMemo(() => {
    if (markerDisplay === 'adjust') {
      return checkColor(color);
    }

    if (markerDisplay === 'contrast') {
      return Color(color).isDark() ? '#fff' : '#000';
    }

    return markerDisplay;
  }, [color, markerDisplay]);

  // TODO? remove useMemo
  const marker = useMemo(() => {
    switch (markerType) {
      case 'border':
        return <BorderMarker size={size} color={colorValue} />;

      case 'icon': {
        return (
          <Icon
            // TODO
            // testId="icon-marker"
            type={iconType}
            name={iconName}
            size={(size / 3) * 2} // TODO update
            color={colorValue}
          />
        );
      }

      case 'fade':
        return <FadeMarker size={size} />;

      default:
        return null;
    }
  }, [markerType, iconType, iconName, size, colorValue]);

  return (
    <View {...props} style={StyleSheet.flatten([style, styles.wrapper])}>
      <Animated.View
      // TODO
      // style={{
      //   transform: [scale, rotate],
      //   // opacity,
      // }}
      >
        {marker}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
