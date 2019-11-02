import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { ItemProps } from '../interfaces'

export const Item = ({
  children,
  style,
  color,
  itemSize,
  shadow,
  ...props
}: ItemProps) => (
  <TouchableOpacity
    {...props}
    style={StyleSheet.flatten([
      style,
      {
        backgroundColor: color,
        borderRadius: itemSize / 2,
        margin: itemSize / 4,
        width: itemSize,
        height: itemSize,
      },
      shadow && {
        elevation: 6,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: color,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
    ])}
  >
    {children}
  </TouchableOpacity>
)
