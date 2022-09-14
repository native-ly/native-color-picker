import type React from 'react';
import type {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';

export interface Item
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  readonly color: string;
  readonly size: number;
  readonly shadow: boolean;
  readonly Component?: React.ReactChildren;
}
