import React from 'react'
import { FlatList } from 'react-native'
import colorSort from 'color-sort'
import Color from 'color'

import { Props } from './interfaces'

import { Item } from './components/Item'
import { Marker } from './components/Marker'
import { Gradient } from './components/Gradient'

import { lighter, darker } from './helpers'

const NativeColorPicker = ({
  animate,
  colors = [],
  columns = 5,
  gradient = false,
  horizontal = false,
  itemSize = 44,
  marker = 'border',
  markerStyle = 'contrast',
  onSelect = item => item,
  selectedColor,
  shadow = false,
  sort = false,
  ...props
}: Props) => (
  <FlatList
    {...props}
    data={sort ? colorSort(colors) : colors}
    horizontal={horizontal}
    keyExtractor={index => index.toString()}
    numColumns={horizontal ? 1 : columns}
    renderItem={({ item }: { item: string }) => (
      <Item
        color={item}
        itemSize={itemSize}
        onPress={() => onSelect(item)}
        shadow={shadow}
      >
        {selectedColor === item && (
          <Marker
            animate={animate}
            color={item}
            markerStyle={markerStyle}
            size={itemSize}
            type={marker}
          />
        )}

        {gradient && (
          <Gradient
            colors={Color(item).isDark() ? darker(item) : lighter(item)}
            size={itemSize}
          />
        )}
      </Item>
    )}
  />
)

export default NativeColorPicker
