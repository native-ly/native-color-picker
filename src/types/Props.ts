import type { FlatListProps, StyleProp, ViewStyle } from 'react-native';
import type { ItemProps, MarkerProps, GradientProps } from '.';

type Shadow = 'inset' | 'offset' | 'both';

interface Item {
  readonly itemProps?: ItemProps;
  readonly itemStyle?: StyleProp<ViewStyle>;
}

interface Marker {
  readonly markerProps?: MarkerProps;
  readonly markerStyle?: StyleProp<ViewStyle>;
}

interface Gradient {
  readonly gradientProps?: GradientProps;
  readonly gradientStyle?: StyleProp<ViewStyle>;
}

interface BaseType extends Item, Marker, Gradient {
  readonly readOnly?: boolean;
  readonly shadow?: Shadow | boolean;
}

interface ColorSchema extends BaseType {
  readonly color: string;
}

export type Colors = string[] | ColorSchema[];

interface BaseProps
  extends Omit<FlatListProps<any>, 'data' | 'renderItem'>,
    BaseType {
  readonly colors: Colors;
  readonly columns?: number;
  readonly horizontal?: boolean;
  readonly sort?: boolean;
}

interface SingleSelect {
  readonly selectedColor?: string;
  readonly multiSelect?: false;
}

interface MultiSelect {
  readonly selectedColors?: string[];
  readonly multiSelect?: true;
}

type SelectionType = SingleSelect | MultiSelect;

export type Props = BaseProps & SelectionType;
