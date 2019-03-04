import React from 'react'
import isDarkColor from 'is-dark-color'

import Props from './interfaces/Props'

import { Base } from './components/Base'
import { Color } from './components/Color'
import { Marker } from './components/Marker'
import { Gradient } from './components/Gradient'

export const NativeColorPicker = ({
  colors = [],
  selectedColor,
  onSelect = item => item,
  horizontal = false,
  applyGradient = false,
  columns = 5,
  itemSize = 50,
  marker = 'border',
}: Props): JSX.Element => (
  <Base
    data={colors}
    numColumns={columns}
    horizontal={horizontal}
    keyExtractor={index => index.toString()}
    renderItem={({ item }) => (
      <Color
        color={item}
        itemSize={itemSize}
        marker={marker}
        onPress={() => onSelect(item)}
      >
        {selectedColor === item && (
          <Marker type={marker} size={itemSize} isDark={isDarkColor(item)} />
        )}

        {applyGradient && (
          <Gradient size={itemSize} colors={['#0000', '#000a']} />
        )}
      </Color>
    )}
  />
)
