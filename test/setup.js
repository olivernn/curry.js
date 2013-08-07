var requirejs = require('requirejs')

requirejs.config({
  baseUrl: './lib',
  nodeRequire: require
})

chai = requirejs('chai')

global.requirejs = requirejs
global.assert = chai.assert
