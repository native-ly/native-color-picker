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
  shadow = false,
  sort = false,
  itemProps,
  itemStyle,
  markerProps,
  markerStyle,
  linearGradientProps,
  linearGradientStyle,
  multiSelect,
  ...props
}: Props) => {
  const handleColorSelect = () => {}

  return (
    <FlatList
      {...props}
      data={sort ? colorSort(colors) : colors}
      horizontal={horizontal}
      keyExtractor={(index) => index.toString()}
      numColumns={horizontal ? 1 : columns}
      testID="colors-grid"
      renderItem={({ item: color }: { readonly item: string }) => {
        const isSelectedItem = multiSelect
          ? props.selectedColors.includes(color)
          : props.selectedColor === color

        return (
          <Item
            {...itemProps}
            style={itemStyle}
            color={color}
            itemSize={itemSize}
            onPress={() => onSelect?.(color)}
            shadow={shadow}
            testID="color-item"
          >
            {isSelectedItem && (
              <Marker
                {...markerProps}
                style={markerStyle}
                color={color}
                size={itemSize}
                testID="current-color-marker" // TODO make unique when multiSelect
              />
            )}

            {gradient && (
              <Gradient
                {...linearGradientProps}
                style={linearGradientStyle}
                colors={Color(color).isDark() ? darker(color) : lighter(color)}
                testID="item-gradient"
                size={itemSize}
              />
            )}
          </Item>
        )
      }}
    />
  )
}

export default NativeColorPicker
