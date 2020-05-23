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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
export var Item = function (_a) {
    var children = _a.children, style = _a.style, color = _a.color, itemSize = _a.itemSize, shadow = _a.shadow, props = __rest(_a, ["children", "style", "color", "itemSize", "shadow"]);
    return (React.createElement(TouchableOpacity, __assign({}, props, { style: StyleSheet.flatten([
            style,
            {
                backgroundColor: color,
                borderRadius: itemSize / 2,
                margin: itemSize / 4,
                width: itemSize,
                height: itemSize,
            },
            shadow && {
                elevation: 6,
                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: color,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
            },
        ]) }), children));
};
