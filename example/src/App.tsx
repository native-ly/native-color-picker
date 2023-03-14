import * as React from 'react';

import { List } from 'native-color-picker';

export default function App() {
  return (
    <List
      colors={['#f96204', '#43d8c9']}
      columns={3}
      gradient
      // horizontal
      itemSize // grow-item, grow-space, grow-both, size
      // itemMinSize // shrink-item, shrink-space, shrink-both
      // itemMaxSize // shrink-item, shrink-space, shrink-both
      onSelect={console.log}
      multiple
      selectedColor
      shadow
      sort
      itemProps
      itemStyle
      markerProps
      markerStyle
      linearGradientProps
      linearGradientStyle
      renderItem
      renderGradient
      renderMarker
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });
