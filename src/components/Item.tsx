import React from 'react'
import { StyleSheet } from 'react-native'

import { pickComponent } from '../helpers'

import { ItemProps } from '../interfaces'

export const Item: React.FC<ItemProps | any> = ({
  color,
  itemSize,
  shadow,
  children,
  style,
  Component,
  ...props
}) => {
  const Touchable = pickComponent(Component)

  return (
    <Touchable
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
    </Touchable>
  )
}
