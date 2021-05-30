import React from 'react'
import { FlatList } from 'react-native'
import colorSort from 'color-sort'
import Color from 'color'

import { Props } from './interfaces'

import { Item, Marker, Gradient } from './components'

import { lighter, darker } from './helpers'

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
}: Props) => (
  <FlatList
    {...props}
    data={sort ? colorSort(colors) : colors}
    horizontal={horizontal}
    // keyExtractor={(index) => index.toString()}
    numColumns={horizontal ? 1 : columns}
    testID="colors-grid"
    renderItem={({ item }: { readonly item: string }) => (
      <Item
        {...itemProps}
        style={itemStyle}
        color={item}
        itemSize={itemSize}
        onPress={() => onSelect?.(item)}
        shadow={shadow}
        testID="color-item"
      >
        {selectedColor === item && (
          <Marker
            {...markerProps}
            style={markerStyle}
            color={item}
            size={itemSize}
            testID="current-color-marker"
          />
        )}

        {gradient && (
          <Gradient
            {...linearGradientProps}
            style={linearGradientStyle}
            colors={Color(item).isDark() ? darker(item) : lighter(item)}
            testID="item-gradient"
            size={itemSize}
          />
        )}
      </Item>
    )}
  />
)

export default NativeColorPicker
