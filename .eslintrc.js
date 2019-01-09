module.exports = {
  parser: 'typescript-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/prop-types': 0
  },
  plugins: ['prettier'],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: require('./package.json').devDependencies.react
    }
  }
};
