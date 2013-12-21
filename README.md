# karma-hydro

## Synopsis

Karma plugin for [hydro](https://github.com/hydrojs/hydro).

## Installation

```
npm install karma-hydro
```

## Configuration

```js
// karma.conf.js

module.exports = function(config) {
  config.set({
    frameworks: ['hydro'],

    files: [
      'test/*.js'
    ],

    client: {
      hydro: {
        plugins: ['hydro-bdd' /* ... */]
      }
    }
  });
};
```

## License

The MIT License (see LICENSE)
