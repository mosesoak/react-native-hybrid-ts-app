# React Native Hybrid Typescript App

Let's build a hybrid app using Typescript!

This experiment sets up separate frontend & native packages, with some simple copy scripts to move code back and forth for now.

The idea is that by isolating the projects, top-level configurations can live separately.

## Key branches in this repo

`basic-no-css-or-redux`
`redux`

## frontend (Web)

React Native for Web:

https://github.com/necolas/react-native-web

react-native-typescript-transformer:

https://github.com/ds300/react-native-typescript-transformer

#### Dependencies:

(on top of an ejected Create-React-App)

`yarn add react-native-web typescript tslint awesome-typescript-loader babel-plugin-react-native-web babel-jest babel-preset-env babel-preset-react babel-preset-react-native react-test-renderer ts-node ts-jest babel-jest canvas-prebuilt react-router redux react-redux react-router-redux redux-devtools-extension redux-thunk prettier prop-types glamor glamorous @types/node @types/jest @types/react-native @types/react @types/redux @types/react-redux @types/redux-thunk @types/react-router-redux`

#### Configs:

- rn-ts-transfomer packager config: [rn-cli.config.js](packages/frontend/rn-cli.config.js)
- Load typescript in [webpack.config.dev.js](packages/frontend/webpack.config.dev.js) in `module > rules`
- [tsconfig.json](packages/frontend/tsconfig.json) - note "skipLibCheck" fix
- custom jest config in [package.json](packages/frontend/package.json)

#### Jest - issues!

- needed to remove the match `|(\\.|/)(test|spec)` because it was matching the file scripts/test.js (provided by the ejected CRA)
- needs [special mocks](https://facebook.github.io/jest/docs/en/webpack.html) to handle inline svg
- had to add dependency `canvas-prebuilt` to avoid error during test
- was erroring out on Animated code, had to work around by setting style in state

## native

#### Dependencies:

(on top of react-native init)

`yarn add redux react-redux redux-thunk && yarn add -D react-native-typescript-transformer typescript tslint ts-node ts-jest fs-extra redux-devtools-extension prettier prop-types glamor glamorous @types/node @types/react-native @types/react @types/jest @types/redux @types/react-redux @types/redux-thunk`

#### Configs:

- [Extra package.json declaring "src"](packages/native/src/package.json) at top of `src` directory - don't skip this step, it's necessary!
- [tsconfig.json](packages/native/tsconfig.json)
- [rn-cli.config.js](packages/native/rn-cli.config.js)
- custom jest config in [package.json](packages/native/package.json)


#### Jest: issues here too!

- Difficult to get images to work, resolved using the assetsTransformer solution from [this thread](https://github.com/facebook/jest/issues/2663)
