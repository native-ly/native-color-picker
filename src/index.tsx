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
  const [size, setSize] = useState(itemSize)

  const handleColorSelect = () => {}

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
      renderItem={({ item: color }: { readonly item: string }) => {
        const isSelectedItem = multiSelect
          ? props.selectedColors.includes(color)
          : props.selectedColor === color

        return (
          <Item
            {...itemProps}
            // style={itemStyle}
            color={item}
            // TODO rename to size
            itemSize={size}
            onPress={() => onSelect?.(color)}
            shadow={[true, 'offset', 'both'].includes(shadow)}
            testID="color-item"
          >
            {isSelectedItem && (
              <Marker
                {...markerProps}
                style={markerStyle}
                color={color}
                size={size}
                testID="current-color-marker"
              />
            )}

            {/* {['inset', 'both'].includes(shadow) && (
          // TODO
        )} */}

            {gradient && (
              <Gradient
                {...linearGradientProps}
                style={linearGradientStyle}
                colors={Color(color).isDark() ? darker(color) : lighter(color)}
                testID="item-gradient"
                size={size}
              />
            )}
          </Item>
        )
      }}
    />
  )
}

export default NativeColorPicker
