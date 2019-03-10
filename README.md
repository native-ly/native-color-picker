# [NativeColorPicker](https://github.com/jb1905/native-color-picker)

[![NPM version](http://img.shields.io/npm/v/native-color-picker.svg?style=flat-square)](https://www.npmjs.com/package/native-color-picker)
[![NPM downloads](http://img.shields.io/npm/dm/native-color-picker.svg?style=flat-square)](https://www.npmjs.com/package/native-color-picker)

## About
React Native color picker component

## How to Install
First, install the library in your project by npm:
```sh
$ npm install native-color-picker
```

Or Yarn:
```sh
$ yarn add native-color-picker
```

## Getting Started
**• Connect libary with project using ES6 import:**
```js
import { NativeColorPicker } from 'native-color-picker';
```

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
**colors** | string[] | `[]` | Colors to display in a color picker | e.g.: `['#f96204', '#43d8c9']`
**columns** | number | `5` | Number of columns in color list (only vertical) | Number of columns
**gradient** | boolean | `false` | Enable or disable gradient layer over the color item | `true` - enable, `false` - disable
**horizontal** | boolean | `false` | Enable or disable horizontal scroll direction | `true` - horizontal, `false` - vertical
**itemSize** | number | `44` | Size (`width` & `height`) of list item | Size of list item
**marker** | string | `border` | Type of marker for selected item | `border`, `checkmark`, `fade`, `none`
**onSelect** | function | `item => item` | Select color item | e.g.: `elem => { /* code */ }`
**selectedColor** | string | ` ` | Marked item | Color from the list `colors`
**shadow** | boolean | `false` | Display shadow for list items | `true` - enable, `false` - disable
**sort** | boolean | `false` | Order colors by perception | `true` - enable, `false` - disable

## License
This project is licensed under the MIT License © 2019-present Jakub Biesiada
