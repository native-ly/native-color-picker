import React from 'react'
import { LinearGradient } from 'expo'

import Props from './interfaces/Props'

import { Base } from './components/Base'
import { Color } from './components/Color'
import { Marker } from './components/Marker'

export const NativeColorPicker = ({
  colors = [],
  selectedColor,
  onSelect,
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
        {selectedColor && <Marker type={marker} size={itemSize} />}

        {applyGradient && <LinearGradient colors={['#0000', '#000a']} />}
      </Color>
    )}
  />
)
