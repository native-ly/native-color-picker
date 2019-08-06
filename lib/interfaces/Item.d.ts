import { TouchableOpacityProps } from 'react-native';
export interface Item extends TouchableOpacityProps {
    readonly color: string;
    readonly itemSize: number;
    readonly shadow: boolean;
}
