import { ViewProps } from 'react-native';
import { Animate, MarkerStyle } from '../types';
export interface Marker extends ViewProps {
    readonly animate?: Animate;
    readonly color: string;
    readonly size: number;
    readonly markerStyle: string;
    readonly type: MarkerStyle;
}
