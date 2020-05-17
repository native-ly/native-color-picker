import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import Color from 'color'

import { MarkerProps } from '../../interfaces'

import { checkColor, countSize } from '../../helpers'

const Base: React.FC = ({ children }) => (
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

const BorderMarker: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => (
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

const FadeMarker: React.FC<{ size: number }> = ({ size }) => (
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

export const Marker: React.FC<MarkerProps> = ({
  animate,
  color,
  size,
  display,
  type,
}) => {
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
    // Animated.timing(scaleValue, {
    //   toValue: 1,
    //   duration: 300,
    // }).start()
    // return animate && (type === 'checkmark' || type === 'border')
    //   ? fadeValue
    //   : 1
  }

  const scale = () => {
    // Animated.timing(rotateValue, {
    //   toValue: 0,
    //   duration: 300,
    // }).start()
    // return {
    //   scale:
    //     animate === 'scale' && (type === 'checkmark' || type === 'border')
    //       ? scaleValue
    //       : 1,
    // }
  }

  const rotate = () => {
    // Animated.timing(fadeValue, {
    //   toValue: 1,
    //   duration: 300,
    // }).start()
    // return {
    //   rotate:
    //     animate === 'rotate' && type === 'checkmark'
    //       ? rotateValue.interpolate({
    //           inputRange: [0, 1],
    //           outputRange: ['0deg', '80deg'],
    //         })
    //       : '0deg',
    // }
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
        ) : (
          type === 'fade' && <FadeMarker size={size} />
        )}
      </Animated.View>
    </Base>
  )
}
