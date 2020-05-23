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
import { FlatList } from 'react-native';
import colorSort from 'color-sort';
import Color from 'color';
import { Item, Marker, Gradient } from './components';
import { lighter, darker } from './helpers';
var NativeColorPicker = function (_a) {
    var animate = _a.animate, _b = _a.colors, colors = _b === void 0 ? [] : _b, _c = _a.columns, columns = _c === void 0 ? 5 : _c, _d = _a.gradient, gradient = _d === void 0 ? false : _d, _e = _a.horizontal, horizontal = _e === void 0 ? false : _e, _f = _a.itemSize, itemSize = _f === void 0 ? 44 : _f, _g = _a.markerType, markerType = _g === void 0 ? 'border' : _g, _h = _a.markerDisplay, markerDisplay = _h === void 0 ? 'contrast' : _h, _j = _a.onSelect, onSelect = _j === void 0 ? function (item) { return item; } : _j, selectedColor = _a.selectedColor, _k = _a.shadow, shadow = _k === void 0 ? false : _k, _l = _a.sort, sort = _l === void 0 ? false : _l, itemProps = _a.itemProps, itemStyle = _a.itemStyle, linearGradientProps = _a.linearGradientProps, linearGradientStyle = _a.linearGradientStyle, props = __rest(_a, ["animate", "colors", "columns", "gradient", "horizontal", "itemSize", "markerType", "markerDisplay", "onSelect", "selectedColor", "shadow", "sort", "itemProps", "itemStyle", "linearGradientProps", "linearGradientStyle"]);
    return (React.createElement(FlatList, __assign({}, props, { data: sort ? colorSort(colors) : colors, horizontal: horizontal, keyExtractor: function (index) { return index.toString(); }, numColumns: horizontal ? 1 : columns, renderItem: function (_a) {
            var item = _a.item;
            return (React.createElement(Item, __assign({}, itemProps, { style: itemStyle, color: item, itemSize: itemSize, onPress: function () { return onSelect(item); }, shadow: shadow }),
                selectedColor === item && (React.createElement(Marker, { color: item, animate: animate, type: markerType, display: markerDisplay, size: itemSize })),
                gradient && (React.createElement(Gradient, __assign({}, linearGradientProps, { style: linearGradientStyle, colors: Color(item).isDark() ? darker(item) : lighter(item), size: itemSize })))));
        } })));
};
export default NativeColorPicker;
