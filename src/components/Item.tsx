import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { pickComponent } from '../helpers'

import { ItemProps } from '../interfaces'

export const Item = ({
  color,
  itemSize,
  shadow,
  children,
  style,
  Component,
  ...props
}: ItemProps & { readonly children: React.ReactNode }) => {
  // TODO update type
  const Touchable = useMemo(() => pickComponent(Component), [Component])

  return (
    <View style={{ width: itemSize, height: itemSize }}>
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
    </View>
  )
}

const itemStyles = StyleSheet.create(
  ({ color, itemSize }: Pick<ItemProps, 'color' | 'itemSize'>) => ({
    backgroundColor: color,
    borderRadius: itemSize / 2,
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
