import React, { FunctionComponent } from 'react'
import { FlatList } from 'react-native'
import colorSort from 'color-sort'
import Color from 'color'

import { Props } from './interfaces'

import { Item, Marker, Gradient } from './components'

import { lighter, darker } from './helpers'

const NativeColorPicker: FunctionComponent<Props> = ({
  animate,
  colors = [],
  columns = 5,
  gradient = false,
  horizontal = false,
  itemSize = 44,
  markerType = 'border',
  markerDisplay = 'contrast',
  onSelect = item => item,
  selectedColor,
  shadow = false,
  sort = false,
  itemProps,
  itemStyle,
  linearGradientProps,
  linearGradientStyle,
  ...props
}) => (
  <FlatList
    {...props}
    data={sort ? colorSort(colors) : colors}
    horizontal={horizontal}
    keyExtractor={index => index.toString()}
    numColumns={horizontal ? 1 : columns}
    renderItem={({ item }: { item: string }) => (
      <Item
        {...itemProps}
        style={itemStyle}
        color={item}
        itemSize={itemSize}
        onPress={() => onSelect(item)}
        shadow={shadow}
      >
        {selectedColor === item && (
          <Marker
            color={item}
            animate={animate}
            type={markerType}
            display={markerDisplay}
            size={itemSize}
          />
        )}

        {gradient && (
          <Gradient
            {...linearGradientProps}
            style={linearGradientStyle}
            colors={Color(item).isDark() ? darker(item) : lighter(item)}
            size={itemSize}
          />
        )}
      </Item>
    )}
  />
)

export default NativeColorPicker
