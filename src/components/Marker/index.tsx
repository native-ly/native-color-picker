import React, { useState, useEffect, useMemo } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import Icon from 'native-icons'
import Color from 'color'

import { BorderMarker } from './BorderMarker'
import { FadeMarker } from './FadeMarker'

import { MarkerProps } from '../../interfaces'

import { checkColor } from '../../helpers'

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
  const scaleValue = useMemo(() => new Animated.Value(0), [])
  const rotateValue = useMemo(() => new Animated.Value(1), [])
  const fadeValue = useMemo(() => new Animated.Value(0), [])

  const [colorValue, setColorValue] = useState(color)

  useEffect(() => {
    let accent: string

    if (markerDisplay === 'adjust') {
      accent = checkColor(color)
    } else if (markerDisplay === 'contrast') {
      accent = Color(color).isDark() ? '#fff' : '#000'
    } else {
      accent = markerDisplay
    }

    setColorValue(accent)
  }, [color, markerDisplay])

  const opacity = useMemo(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    return animate && (markerType === 'icon' || markerType === 'border')
      ? fadeValue
      : 1
  }, [animate, fadeValue, markerType, scaleValue])

  const scale = useMemo(() => {
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()

    return {
      scale:
        animate === 'scale' &&
        (markerType === 'icon' || markerType === 'border')
          ? scaleValue
          : 1,
    }
  }, [animate, markerType, rotateValue, scaleValue])

  const rotate = useMemo(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    return {
      rotate:
        animate === 'rotate' && markerType === 'icon'
          ? rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '80deg'],
            })
          : '0deg',
    }
  }, [animate, fadeValue, markerType, rotateValue])

  return (
    <View {...props} style={StyleSheet.flatten([style, styles.wrapper])}>
      <Animated.View
        style={{
          opacity,
          transform: [scale, rotate],
        }}
      >
        {markerType === 'border' ? (
          <BorderMarker size={size} color={colorValue} />
        ) : markerType === 'icon' ? (
          <Icon
            // TODO
            // testId="icon-marker"
            type={iconType}
            name={iconName}
            size={(size / 3) * 2}
            color={colorValue}
          />
        ) : (
          markerType === 'fade' && <FadeMarker size={size} />
        )}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
