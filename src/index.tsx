import React from 'react'
import { FlatList } from 'react-native'
import colorSort from 'color-sort'
import isDarkColor from 'is-dark-color'

import Props from './interfaces/Props'

import { Color } from './components/Color'
import { Marker } from './components/Marker'
import { Gradient } from './components/Gradient'

export const NativeColorPicker = ({
  colors = [],
  columns = 5,
  gradient = false,
  horizontal = false,
  itemSize = 44,
  marker = 'border',
  onSelect = item => item,
  selectedColor,
  shadow = false,
  sort = false,
  ...props
}: Props): JSX.Element => (
  <FlatList
    {...props}
    data={sort ? colorSort(colors) : colors}
    horizontal={horizontal}
    keyExtractor={index => index.toString()}
    numColumns={horizontal ? 1 : columns}
    renderItem={({ item }) => (
      <Color
        color={item}
        itemSize={itemSize}
        onPress={() => onSelect(item)}
        shadow={shadow}
      >
        {selectedColor === item && (
          <Marker
            isDark={isDarkColor(item)}
            size={itemSize}
            type={marker}
          />
        )}

        {gradient && (
          <Gradient
            colors={isDarkColor(item) ? ['#0000', '#0006'] : ['#fff6', '#fff0']}
            size={itemSize}
          />
        )}
      </Color>
    )}
  />
)
