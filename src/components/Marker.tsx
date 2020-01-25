import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Color from 'color'

import { MarkerProps } from '../interfaces'

import { Children } from '../types'

import { checkColor, countSize } from '../helpers'

const Base = ({ children }: { children: Children }) => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </View>
)

const BorderMarker = ({ size, color }: { size: number; color: string }) => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      width: size - 4,
      height: size - 4,
      marginTop: -(size / 2 - 2),
      marginLeft: -(size / 2 - 2),
      borderRadius: (size - 2 * countSize(size)) / 2,
      borderWidth: countSize(size),
      borderColor: color,
    }}
  />
)

const FadeMarker = ({ size }: { size: number }) => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#fff8',
      width: size,
      height: size,
      marginTop: -(size / 2),
      marginLeft: -(size / 2),
      borderRadius: size / 2,
    }}
  />
)

export const Marker = ({
  animate,
  color,
  size,
  display,
  type,
}: MarkerProps) => {
  const scaleValue = new Animated.Value(0)
  const rotateValue = new Animated.Value(1)
  const fadeValue = new Animated.Value(0)

  if (display === 'adjust') {
    color = checkColor(color)
  } else if (display === 'contrast') {
    color = Color(color).isDark() ? '#fff' : '#000'
  } else {
    color = display
  }

  const opacity = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
    }).start()

    return animate && (type === 'checkmark' || type === 'border')
      ? fadeValue
      : 1
  }

  const scale = () => {
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 300,
    }).start()

    return {
      scale:
        animate === 'scale' && (type === 'checkmark' || type === 'border')
          ? scaleValue
          : 1,
    }
  }

  const rotate = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 300,
    }).start()

    return {
      rotate:
        animate === 'rotate' && type === 'checkmark'
          ? rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '80deg'],
            })
          : '0deg',
    }
  }

  return (
    <Base>
      <Animated.View
        style={{
          opacity: opacity(),
          transform: [scale(), rotate()],
        }}
      >
        {type === 'border' ? (
          <BorderMarker size={size} color={color} />
        ) : type === 'checkmark' ? (
          <Icon name="md-checkmark" size={(size / 3) * 2} color={color} />
        ) : (
          type === 'fade' && <FadeMarker size={size} />
        )}
      </Animated.View>
    </Base>
  )
}
