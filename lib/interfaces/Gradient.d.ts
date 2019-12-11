import { StyleProp, ViewStyle } from 'react-native';
export interface Gradient {
    readonly size: number;
    readonly colors: string[];
    readonly style: StyleProp<ViewStyle>;
}
