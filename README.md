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

    hydro: { path: 'custom-path-to-hydro.js' }, // optional

    client: {
      hydro: {
        // hydro & hydro plugins options

        plugins: ['hydro-bdd' /* ... */]
        timeout: 2000,
        // ...

        // karma specific options

        setup: true // instantaneous setup, optional, default: false
      }
    }
  });
};
```

## License

The MIT License (see LICENSE)
