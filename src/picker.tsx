import React from 'react';
import styled from 'styled-components';

const Base = styled.FlatList``;

const Color = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  ${({ itemSize }) => `
    width: ${itemSize}px;
    height: ${itemSize}px;
    border-radius: ${itemSize / 2}px;
  `}
`;

interface Options {
  colors?: string[];
  selectedColor: string;
  onSelect: void;
  horizontal?: boolean;
  applyGradient?: boolean;
  columns?: number;
  itemSize?: number;
  marker?: 'border' | 'tick' | 'fade' | 'none';
}

export const NativeColorPicker = ({
  colors = [],
  selectedColor,
  onSelect,
  horizontal = false,
  applyGradient = false,
  columns = 5,
  itemSize = 50,
  marker = 'border'
}): Options => (
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
      />
    )}
  />
);
