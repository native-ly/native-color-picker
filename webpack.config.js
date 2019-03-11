module.exports = env => {
  const libraryName = 'native-color-picker'

  let outputFile, mode, devtool

  if (env === 'build') {
    mode = 'production'
    outputFile = `${libraryName}.min.js`
    devtool = false
  } else {
    mode = 'development'
    outputFile = `${libraryName}.js`
    devtool = 'source-map'
  }

  return {
    mode,
    entry: `${__dirname}/src/index.tsx`,
    externals: [
      'color-sort',
      'expo',
      '@expo/vector-icons',
      'is-dark-color',
      'react',
      'react-native',
      'styled-components',
    ],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'NativeColorPicker',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'global',
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx'],
          },
        },
      ],
    },
  }
}
