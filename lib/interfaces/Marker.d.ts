import { ViewProps } from 'react-native';
import type { Animate, MarkerDisplay, MarkerType } from '../types';
export interface Marker extends ViewProps {
    readonly animate?: Animate;
    readonly color: string;
    readonly size: number;
    readonly display: MarkerDisplay;
    readonly type: MarkerType;
}
