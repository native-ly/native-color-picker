import { TouchableOpacityProps } from 'react-native';
import { Children } from '../types';
export interface Item extends TouchableOpacityProps {
    readonly color: string;
    readonly itemSize: number;
    readonly shadow: boolean;
    readonly children: Children;
}
