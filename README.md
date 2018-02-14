# React Native Hybrid Typescript App

Let's build a hybrid app using Typescript!

This experiment sets up separate frontend & native packages, with some simple copy scripts to move code back and forth for now.

The idea is that by isolating the projects, top-level configurations can live separately.

## frontend (Web)

React Native for Web:

https://github.com/necolas/react-native-web

react-native-typescript-transformer
https://github.com/ds300/react-native-typescript-transformer

`yarn add react-native-web`

`yarn add -D awesome-typescript-loader babel-plugin-react-native-web babel-jest babel-preset-env babel-preset-react babel-preset-react-native react-test-renderer ts-jest babel-jest @types/jest @types/react-native @types/react`

Load typescript in webpack.config.dev.js
```js
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
```

Jest - issues!

- needs [special mocks](https://facebook.github.io/jest/docs/en/webpack.html) to handle inline svg
- `yarn add canvas-prebuilt` to avoid error during test
- was erroring out on Animated code, had to workaround by setting style in state


## native

`yarn add -D react-native-typescript-transformer typescript tslint ts-jest @types/react-native @types/react @types/jest fs-extra`

Jest: issues here too!

- Difficult to get images to work, resolved using the assetsTransformer solution from [this thread](https://github.com/facebook/jest/issues/2663)

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "jsx": "react",
    "allowJs": true,
    "noEmit": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "types": [
      "react",
      "react-dom",
      "react-native",
      "jest"
    ],
    "lib": [
      "es6"
    ],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "strictNullChecks": true,
    "noImplicitAny": true
  },
  "exclude": [
    "node_modules",
    "src/state/_web/**/*.*"
  ]
}
```

tsconfig.jest
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": null
  },
  "exclude": ["node_modules"]
}
```

rn-cli.config.js
```js
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
```

