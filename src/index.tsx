import React, { useCallback, useState } from 'react'
import { FlatList, LayoutChangeEvent } from 'react-native'
import colorSort from 'color-sort'
import Color from 'color'

import { Props } from './interfaces'

import { Item, Marker, Gradient } from './components'

import { lighter, darker } from './helpers'

type HandleLayoutCallback = (e: LayoutChangeEvent) => void

const NativeColorPicker = ({
  colors,
  columns = 5,
  gradient = false,
  horizontal = false,
  itemSize = 44,
  onSelect,
  selectedColor,
  shadow = false,
  sort = false,
  itemProps,
  itemStyle,
  markerProps,
  markerStyle,
  linearGradientProps,
  linearGradientStyle,
  ...props
}: Props) => {
  const [size, setSize] = useState(itemSize)

  const handleLayout = useCallback<HandleLayoutCallback>(
    (e) => {
      props.onLayout?.(e)

      const { width } = e.nativeEvent.layout

      setSize(width / columns)
    },
    [columns, props]
  )

  return (
    <FlatList
      {...props}
      onLayout={handleLayout}
      data={sort ? colorSort(colors) : colors}
      horizontal={horizontal}
      keyExtractor={(item) => item}
      numColumns={horizontal ? 1 : columns}
      testID="colors-grid"
      renderItem={({ item }: { readonly item: string }) => (
        <Item
          {...itemProps}
          // style={itemStyle}
          color={item}
          // TODO rename to size
          itemSize={size}
          onPress={() => onSelect?.(item)}
          shadow={shadow}
          testID="color-item"
        >
          {selectedColor === item && (
            <Marker
              {...markerProps}
              style={markerStyle}
              color={item}
              size={size}
              testID="current-color-marker"
            />
          )}

          {gradient && (
            <Gradient
              {...linearGradientProps}
              style={linearGradientStyle}
              colors={Color(item).isDark() ? darker(item) : lighter(item)}
              testID="item-gradient"
              size={size}
            />
          )}
        </Item>
      )}
    />
  )
}

export default NativeColorPicker
