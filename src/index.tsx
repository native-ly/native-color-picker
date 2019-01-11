import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const Base = styled.FlatList``;

const Color = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  ${({ itemSize }) => `
    width: ${itemSize}px;
    height: ${itemSize}px;
    border-radius: ${itemSize / 2}px;
  `}
`;

interface Props {
  colors?: string[];
  selectedColor: string;
  onSelect: void;
  horizontal?: boolean;
  applyGradient?: boolean;
  columns?: number;
  itemSize?: number;
  marker?: 'border' | 'checkmark' | 'fade' | 'none';
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
}): Props => (
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
        {selectedColor &&
          (marker === 'checkmark' && (
            <Ionicons name="md-checkmark" size={itemSize} />
          ))}

        {applyGradient && <LinearGradient colors={['#0000', '#000a']} />}
      </Color>
    )}
  />
);
