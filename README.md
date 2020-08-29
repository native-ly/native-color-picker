# [NativeColorPicker](https://github.com/native-ly/native-color-picker)

[![NPM version](https://img.shields.io/npm/v/native-color-picker?style=flat-square)](https://www.npmjs.com/package/native-color-picker)
[![NPM downloads](https://img.shields.io/npm/dm/native-color-picker?style=flat-square)](https://www.npmjs.com/package/native-color-picker)
[![NPM license](https://img.shields.io/npm/l/native-color-picker?style=flat-square)](https://www.npmjs.com/package/native-color-picker)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-color-picker)
[![Codecov](https://img.shields.io/codecov/c/github/native-ly/native-color-picker?style=flat-square)](https://codecov.io/gh/native-ly/native-color-picker)
[![Travis](https://img.shields.io/travis/native-ly/native-color-picker/master?style=flat-square)](https://travis-ci.org/native-ly/native-color-picker)

<p align="center">
  <img width="420" src="https://raw.githubusercontent.com/native-ly/native-color-picker/master/assets/preview.jpg">
</p>

## About

Color picker for React Native

### Alternatives

- [react-native-color-picker](https://github.com/instea/react-native-color-picker/) by [instea](https://github.com/instea/)
- [React Native Color Palette](https://github.com/holmansv/react-native-color-palette/) by [Holman Strategic Ventures](https://github.com/holmansv/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-color-picker
```

Or Yarn:

```sh
$ yarn add native-color-picker
```

### Expo Project

- install `expo-linear-gradient`:

```sh
$ npm install expo-linear-gradient
```

Or Yarn:

```sh
$ yarn add expo-linear-gradient
```

### Bare React Native Project

- add `react-native-linear-gradient` – [follow instructions here](https://github.com/react-native-community/react-native-linear-gradient#react-native-linear-gradient)

## Getting Started

**• Connect libary with project using ES6 import:**

```js
import NativeColorPicker from 'native-color-picker'
```

## Options

| Name                    | Type                  | Default                                         | Description                                          | Available options                       |
| ----------------------- | --------------------- | ----------------------------------------------- | ---------------------------------------------------- | --------------------------------------- |
| **colors**              | string[]              | `[]`                                            | Colors to display in a color picker                  | e.g.: `['#f96204', '#43d8c9']`          |
| **columns**             | number                | `5`                                             | Number of columns in color list (only vertical)      | Number of columns                       |
| **gradient**            | boolean               | `false`                                         | Enable or disable gradient layer over the color item | `true` - enable, `false` - disable      |
| **horizontal**          | boolean               | `false`                                         | Enable or disable horizontal scroll direction        | `true` - horizontal, `false` - vertical |
| **itemSize**            | number                | `44`                                            | Size (`width` & `height`) of list item               | Size of list item                       |
| **onSelect**            | function              | `item => item`                                  | Select color item                                    | e.g.: `elem => { /* code */ }`          |
| **selectedColor**       | string                | `` | Marked item | Color from the list `colors` |
| **shadow**              | boolean               | `false`                                         | Display shadow for list items                        | `true` - enable, `false` - disable      |
| **sort**                | boolean               | `false`                                         | Order colors by perception                           | `true` - enable, `false` - disable      |
| **itemProps**           | TouchableOpacityProps | `{}`                                            | Item props                                           | TouchableOpacity props                  |
| **itemStyle**           | StyleProps<ViewStyle> | `{}`                                            | Styles for Item                                      | View styles                             |
| **markerProps**         | ViewProps             | `{}`                                            | Item props                                           | View props                              |
| **markerStyle**         | StyleProps<ViewStyle> | `{}`                                            | Styles for Item                                      | View styles                             |
| **linearGradientProps** | LinearGradientProps   | `{}`                                            | Gradient props                                       | LinearGradientProps props               |
| **linearGradientStyle** | StyleProps<ViewStyle> | `{}`                                            | Styles for Gradient                                  | View styles                             |

## License

This project is licensed under the MIT License © 2019-present Jakub Biesiada
