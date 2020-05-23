var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from '../imports';
export var Gradient = function (_a) {
    var colors = _a.colors, style = _a.style, size = _a.size;
    return (React.createElement(LinearGradient, { colors: colors, style: StyleSheet.flatten([
            style,
            __assign(__assign({}, StyleSheet.absoluteFillObject), { borderRadius: size / 2, zIndex: -1 }),
        ]) }));
};
