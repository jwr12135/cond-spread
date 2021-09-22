# Conditional Spread

[![npm](https://img.shields.io/npm/v/cond-spread)](https://www.npmjs.com/package/cond-spread) [![downloads](https://img.shields.io/npm/dw/cond-spread)](https://www.npmjs.com/package/cond-spread)

> Conditionally spread elements

## Installation

To install with npm, run:

```sh
npm i cond-spread
```

To install with yarn, run:

```sh
yarn add cond-spread
```

## Usage

First import the `cond-spread` package:

```js
import condSpread from 'cond-spread';
```

The `condSpread` function takes a boolean as its argument, and returns another function, which can then take either an array or an object as its argument. If the first boolean was true, then the second function will return its argument. If the boolean was false, then the second function will return an empty array if the argument was an array, or an empty object if the argument was an object.

### Example with arrays

```js
const myNum = 5;

const isFive = condSpread(myNum === 5);
const isNotFive = condSpread(myNum !== 5);

const myArray = [
  'a',
  ...isFive(['num is five']),
  'b',
  ...isNotFive(['num is not five']),
  'c',
  ...condSpread(true)([123]),
];

console.log(myArray); // ['a', 'num is five', 'b', 'c', 123]
```

### Example with objects

```js
const myNum = 5;

const isFive = condSpread(myNum === 5);
const isNotFive = condSpread(myNum !== 5);

const myObject = {
  a: 0,
  ...isFive({ msg1: 'num is five' }),
  b: 1,
  ...isNotFive({ msg2: 'num is not five' }),
  c: 2,
  ...condSpread(true)({ d: 123 }),
};

console.log(myObject); // {a: 0, msg1: 'num is five', b: 1, c: 2, d: 123}
```

### Example with webpack

```js
import condSpread from 'cond-spread';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default (env, { mode }) => {
  const isDev = condSpread(mode === 'development');
  const isProd = condSpread(mode === 'production');

  return {
    plugins: [
      ...isDev([new BundleAnalyzerPlugin()]),
      ...isProd([
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            {
              from: './assets/icons',
              to: './icons',
            },
          ],
        }),
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
