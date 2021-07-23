import React, { useCallback, useState } from 'react'
import { FlatList, LayoutChangeEvent } from 'react-native'
import colorSort from 'color-sort'
import Color from 'color'

import { Props } from '../interfaces'

import { Item, Marker, InsetShadow, Gradient } from '../components'

import { lighter, darker } from '../helpers'
import { Colors } from '../interfaces/Props' // TODO import from '../interfaces'

type HandleLayoutCallback = (e: LayoutChangeEvent) => void

export const List = ({
  colors,
  columns = 5,
  gradient = false,
  horizontal = false,
  // itemSize = 44,
  // TODO item min size
  // TODO item max size
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

  // TODO? add local selected items

  // TODO refactor + types to HandleColorSelectCallback
  const handleColorSelect = useCallback(
    (color: Colors[number]) => {
      if (props.readOnly) {
        return
      }

      props.onSelect?.(color)
    },
    [props]
  )

  const handleLayout = useCallback<HandleLayoutCallback>(
    (e) => {
      // TODO check if itemSize in props
      props.onLayout?.(e)

      const { width } = e.nativeEvent.layout

      setSize(width / columns)
    },
    [columns, props]
  )

  return (
    // TODO add internal context
    <FlatList
      {...props}
      onLayout={handleLayout}
      data={sort ? colorSort(colors) : colors}
      horizontal={horizontal}
      keyExtractor={(item) => item}
      numColumns={horizontal ? 1 : columns}
      testID="colors-grid"
      // TODO? move to separate component
      renderItem={({ item }: { readonly item: string }) => {
        // const color = typeof item === "string" ? item.color || item
        const color = item.color || item
        const hasGradient = item.gradient || gradient
        const shadowType = item.shadow || shadow

        const gradientColor = Color(color).isDark()
          ? darker(color)
          : lighter(color)

        const isSelectedItem = props.multiSelect
          ? (props.selectedColors || []).includes(color) // TODO refactor
          : props.selectedColor === color

        const offsetShadow = [true, 'offset', 'both']
        const insetShadow = ['inset', 'both']

        return (
          <Item
            {...itemProps}
            style={itemStyle} // TODO?
            color={color}
            size={size}
            onPress={() => handleColorSelect(color)} // TODO
            shadow={offsetShadow.includes(shadowType)}
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

            {/* TODO */}
            {insetShadow.includes(shadowType) && <InsetShadow />}

            {hasGradient && (
              <Gradient
                {...linearGradientProps}
                style={linearGradientStyle}
                colors={gradientColor}
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
