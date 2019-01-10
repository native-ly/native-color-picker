const env = require('yargs').argv.env;

const libraryName = 'native-color-picker';

let outputFile, mode, devtool;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
  devtool = false;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

const config = {
  mode,
  entry: `${__dirname}/src/picker.tsx`,
  externals: ['react', 'styled-components', 'expo', '@expo/vector-icons'],
  devtool,
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'NativeColorPicker',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'global'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
