var property = require('./property'),
    slice = Array.prototype.slice

module.exports = function (name) {
  var prop = property(name),
      args = slice.call(arguments, 1)

  return function (obj) {
    var fn = prop(obj)

    if (fn === undefined) throw new TypeError ('target is undefined')
    if (typeof fn.apply !== 'function') throw new TypeError (name + ' is not applyable')
    return fn.apply(obj, args)
  }
}
