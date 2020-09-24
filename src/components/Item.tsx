import React, { useMemo, memo } from 'react'
import { StyleSheet } from 'react-native'

import { pickComponent } from '../helpers'

import { ItemProps } from '../interfaces'

export const Item = memo<ItemProps>(
  ({ color, itemSize, shadow, children, style, Component, ...props }) => {
    // TODO
    const Touchable: any = useMemo(() => pickComponent(Component), [])

    return (
      <Touchable
        {...props}
        style={StyleSheet.flatten([
          style,
          itemStyles({ color, itemSize }),
          shadow && shadowStyles({ color }),
        ])}
      >
        {children}
      </Touchable>
    )
  }
)

const itemStyles = StyleSheet.create(
  ({ color, itemSize }: Pick<ItemProps, 'color' | 'itemSize'>) => ({
    backgroundColor: color,
    borderRadius: itemSize / 2,
    margin: itemSize / 4,
    width: itemSize,
    height: itemSize,
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
