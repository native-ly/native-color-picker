import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { pickComponent } from '../helpers';
import type { ItemProps } from '../types';

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
  const Touchable = useMemo(() => pickComponent(Component), [Component]);

  const styles = getStyles({ color, size });

  return (
    <View style={styles.wrapper}>
      <Touchable
        {...props}
        style={StyleSheet.flatten([
          style,
          styles.item,
          shadow && styles.shadow,
        ])}
      >
        {children}
      </Touchable>
    </View>
  );
};

const getStyles = ({ color, size }: Pick<ItemProps, 'color' | 'size'>) => {
  return StyleSheet.create({
    // TODO rename
    wrapper: {
      width: size,
      height: size,
    },
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
