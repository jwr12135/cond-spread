# cond-spread [![npm](https://img.shields.io/npm/v/cond-spread)](https://www.npmjs.com/package/cond-spread) [![downloads](https://img.shields.io/npm/dw/cond-spread)](https://www.npmjs.com/package/cond-spread)

Conditionally spread object and array items.

## Installation

### npm

```sh
npm i cond-spread
```

### yarn

```sh
yarn add cond-spread
```

## Usage

First import the `cond-spread` package:

```js
import condSpread from 'cond-spread';
```

`condSpread` is a curried function that takes a boolean, and an object or array. It returns the object or array is the boolean was true, otherwise it returns an empty object or array.

### Example with webpack

```js
...

import condSpread from 'cond-spread';

export default (env, { mode }) => {
  const isDev = condSpread(mode === 'development');
  const isProd = condSpread(mode === 'production');

  return {
    plugins: [
      ...isDev([new BundleAnalyzerPlugin()]),
      ...isProd([
        new CleanWebpackPlugin(),
        new CopyPlugin(),
      ]),
    ],
    ...isDev({
      devServer: {
        hot: true,
      },
    }),
  };
};
```
