import React, { useState, useCallback, useEffect, memo } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import Icon from 'native-icons'
import Color from 'color'

import { BorderMarker } from './BorderMarker'
import { FadeMarker } from './FadeMarker'

import { MarkerProps } from '../../interfaces'

import { checkColor } from '../../helpers'

export const Marker = memo<MarkerProps>(
  ({
    color,
    size,
    animate,
    markerDisplay = 'contrast',
    markerType = 'border',
    iconName = 'md-checkmark',
    iconType = 'ionicons',
    style,
    ...props
  }) => {
    const scaleValue = new Animated.Value(0)
    const rotateValue = new Animated.Value(1)
    const fadeValue = new Animated.Value(0)

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
    }, [])

    const opacity = useCallback(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()

      return animate && (markerType === 'icon' || markerType === 'border')
        ? fadeValue
        : 1
    }, [])

    const scale = useCallback(() => {
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
    }, [])

    const rotate = useCallback(() => {
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
    }, [])

    return (
      <View {...props} style={StyleSheet.flatten([style, styles.wrapper])}>
        <Animated.View
          style={{
            opacity: opacity(),
            transform: [scale(), rotate()],
          }}
        >
          {markerType === 'border' ? (
            <BorderMarker size={size} color={colorValue} />
          ) : markerType === 'icon' ? (
            <Icon
              testId="icon-marker"
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
)

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
