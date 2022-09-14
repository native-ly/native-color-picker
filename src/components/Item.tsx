import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { pickComponent } from 'src/helpers';
import type { ItemProps } from 'src/types';

export const Item: React.FC<ItemProps> = ({
  color,
  size,
  shadow,
  children,
  style,
  Component,
  ...props
}) => {
  // TODO update type
  // TODO? remove useMemo
  const Touchable = useMemo(() => pickComponent(Component), [Component]);

  const styles = getStyles({ color, size });

  return (
    <View style={{ width: size, height: size }}>
      <Touchable
        {...props}
        style={StyleSheet.flatten([
          style,
          styles.item,
          // itemStyles({ color, size }),
          shadow && styles.shadow,
        ])}
      >
        {children}
      </Touchable>
    </View>
  );
};

const getStyles = ({ color, size }: Pick<ItemProps, 'color' | 'size'>) => {
  // TODO
  return StyleSheet.create({
    item: {
      backgroundColor: color,
      borderRadius: size / 2,
      width: '100%',
      height: '100%',
    },
    shadow: {
      elevation: 6,
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: color,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
  });
};

// const itemStyles = StyleSheet.create(
//   ({ color, size }: Pick<ItemProps, 'color' | 'size'>) => ({
//     backgroundColor: color,
//     borderRadius: size / 2,
//     width: '100%',
//     height: '100%',
//   })
// )

// const shadowStyles = StyleSheet.create(
//   ({ color }: Pick<ItemProps, 'color'>) => ({
//     elevation: 6,
//     shadowOpacity: 0.75,
//     shadowRadius: 5,
//     shadowColor: color,
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//   })
// )
