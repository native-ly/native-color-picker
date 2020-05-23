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
import { View, Animated, StyleSheet } from 'react-native';
import Color from 'color';
import { checkColor, countSize } from '../helpers';
var Base = function (_a) {
    var children = _a.children;
    return (React.createElement(View, { style: __assign(__assign({}, StyleSheet.absoluteFillObject), { display: 'flex', alignItems: 'center', justifyContent: 'center' }) }, children));
};
var BorderMarker = function (_a) {
    var size = _a.size, color = _a.color;
    return (React.createElement(View, { style: __assign(__assign({}, StyleSheet.absoluteFillObject), { width: size - 4, height: size - 4, marginTop: -(size / 2 - 2), marginLeft: -(size / 2 - 2), borderRadius: (size - 2 * countSize(size)) / 2, borderWidth: countSize(size), borderColor: color }) }));
};
var FadeMarker = function (_a) {
    var size = _a.size;
    return (React.createElement(View, { style: __assign(__assign({}, StyleSheet.absoluteFillObject), { backgroundColor: '#fff8', width: size, height: size, marginTop: -(size / 2), marginLeft: -(size / 2), borderRadius: size / 2 }) }));
};
export var Marker = function (_a) {
    var animate = _a.animate, color = _a.color, size = _a.size, display = _a.display, type = _a.type;
    var scaleValue = new Animated.Value(0);
    var rotateValue = new Animated.Value(1);
    var fadeValue = new Animated.Value(0);
    if (display === 'adjust') {
        color = checkColor(color);
    }
    else if (display === 'contrast') {
        color = Color(color).isDark() ? '#fff' : '#000';
    }
    else {
        color = display;
    }
    var opacity = function () {
        // Animated.timing(scaleValue, {
        //   toValue: 1,
        //   duration: 300,
        // }).start()
        // return animate && (type === 'checkmark' || type === 'border')
        //   ? fadeValue
        //   : 1
    };
    var scale = function () {
        // Animated.timing(rotateValue, {
        //   toValue: 0,
        //   duration: 300,
        // }).start()
        // return {
        //   scale:
        //     animate === 'scale' && (type === 'checkmark' || type === 'border')
        //       ? scaleValue
        //       : 1,
        // }
    };
    var rotate = function () {
        // Animated.timing(fadeValue, {
        //   toValue: 1,
        //   duration: 300,
        // }).start()
        // return {
        //   rotate:
        //     animate === 'rotate' && type === 'checkmark'
        //       ? rotateValue.interpolate({
        //           inputRange: [0, 1],
        //           outputRange: ['0deg', '80deg'],
        //         })
        //       : '0deg',
        // }
    };
    return (React.createElement(Base, null,
        React.createElement(Animated.View, { style: {
                opacity: opacity(),
                transform: [scale(), rotate()],
            } }, type === 'border' ? (React.createElement(BorderMarker, { size: size, color: color })) : (type === 'fade' && React.createElement(FadeMarker, { size: size })))));
};
