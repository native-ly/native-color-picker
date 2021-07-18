import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { pickComponent } from '../helpers'

import { ItemProps } from '../interfaces'

export const Item: React.FC<ItemProps> = ({
  color,
  size,
  shadow,
  children,
  style,
  Component,
  ...props
}) => {
  // TODO update type
  const Touchable = useMemo(() => pickComponent(Component), [Component])

  return (
    <View style={{ width: size, height: size }}>
      <Touchable
        {...props}
        style={StyleSheet.flatten([
          style,
          itemStyles({ color, size }),
          shadow && shadowStyles({ color }),
        ])}
      >
        {children}
      </Touchable>
    </View>
  )
}

const itemStyles = StyleSheet.create(
  ({ color, size }: Pick<ItemProps, 'color' | 'size'>) => ({
    backgroundColor: color,
    borderRadius: size / 2,
    width: '100%',
    height: '100%',
  })
)

const shadowStyles = StyleSheet.create(
  ({ color }: Pick<ItemProps, 'color'>) => ({
    elevation: 6,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  })
)
