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
 * Insert hydro into the loaded files.
 *
 * @param {Array} files
 * @api public
 */

function init(config) {
  var hydroConfig = config.hydro || {};
  var hydroJs = hydroConfig.path || dirname(dirname(resolve('hydro'))) + '/hydro.js';

  config.files.unshift(createPattern(__dirname + '/adapter.js'));
  config.files.unshift(createPattern(hydroJs));
}

/**
 * Inject.
 */

init.$inject = ['config'];

/**
 * Primary export.
 */

module.exports = {
  'framework:hydro': ['factory', init]
};
