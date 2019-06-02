import React, { useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import Color from 'color'

import { Marker as MarkerProps } from '../interfaces'

import { mixin, checkColor, countSize } from '../helpers'

const Base = styled.View`
  ${mixin}

  display: flex;
  align-items: center;
  justify-content: center;
`

const BorderMarker = styled.View<{ color: string; size: number }>`
  ${mixin}

  ${({ color, size }) => `
    margin: ${countSize(size)}px;
    border-radius: ${(size - 2 * countSize(size)) / 2}px;
    border: ${countSize(size)}px solid ${color};
  `}
`

const FadeMarker = styled.View<{ size: number }>`
  ${mixin}

  background-color: #fff8;

  ${({ size }) => `
    border-radius: ${size / 2}px;
  `}
`

export const Marker = ({
  animate,
  color,
  size,
  markerStyle,
  type,
}: MarkerProps): JSX.Element => {
  const scaleValue = new Animated.Value(0)
  const rotateValue = new Animated.Value(1)
  const fadeValue = new Animated.Value(0)

  if (markerStyle === 'adjust') {
    color = checkColor(color)
  } else if (markerStyle === 'contrast') {
    color = Color(color).isDark() ? '#fff' : '#000'
  } else {
    color = markerStyle
  }

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
    }).start()

    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 300,
    }).start()

    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 300,
    }).start()
  }, [])

  return (
    <Base>
      <Animated.View
        style={{
          opacity: animate ? fadeValue : 1,
          transform: [
            animate === 'scale' ? { scale: scaleValue } : { scale: 1 },
            animate === 'rotate'
              ? {
                  rotate: rotateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '80deg'],
                  }),
                }
              : { rotate: '0deg' },
          ],
        }}
      >
        {type === 'border' ? (
          <BorderMarker color={color} size={size} />
        ) : type === 'checkmark' ? (
          <Ionicons color={color} name="md-checkmark" size={(size / 3) * 2} />
        ) : (
          type === 'fade' && <FadeMarker size={size} />
        )}
      </Animated.View>
    </Base>
  )
}
