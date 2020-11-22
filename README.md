# next-sets
> Set a lot value value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-sets
```

## usage
```js
import '@jswork/next-sets';

const obj = {};

nx.sets(obj, {
  testA: 'A1',
  testB: 'B1',
  testC: 'C1',
  testD: 'D1',
  'path.key1.a.b': 'b-value1'
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-sets/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-sets
[version-url]: https://npmjs.org/package/@jswork/next-sets

[license-image]: https://img.shields.io/npm/l/@jswork/next-sets
[license-url]: https://github.com/afeiship/next-sets/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-sets
[size-url]: https://github.com/afeiship/next-sets/blob/master/dist/next-sets.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-sets
[download-url]: https://www.npmjs.com/package/@jswork/next-sets
