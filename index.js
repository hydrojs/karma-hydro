/**
 * Core dependencies.
 */

var dirname = require('path').dirname;
var resolve = require.resolve;

/**
 * Create path.
 *
 * @param {String} pattern
 * @returns {Object}
 * @api private
 */

function createPattern(pattern) {
  return {
    pattern: pattern,
    included: true,
    served: true,
    watched: false
  };
}

/**
 * Initialize hydro.
 *
 * @param {Array} files
 * @param {Array} hydro plugins
 * @api public
 */

function init(files, config) {
  var hydroJs = dirname(dirname(resolve('hydro'))) + '/hydro.js';

  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(hydroJs));

  if (config && config.plugins) {
    config.clientPlugins = [];
    config.plugins.forEach(function(plugin) {
      config.clientPlugins.push(plugin);
      files.unshift(
        createPattern(dirname(resolve(plugin)) + '/' + plugin + '.js')
      );
    });
  }
}

/**
 * Inject.
 */

init.$inject = [
  'config.files',
  'config.client.hydro'
];

/**
 * Primary export.
 */

module.exports = {
  'framework:hydro': ['factory', init]
};
