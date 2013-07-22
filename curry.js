(function () {
  var global = this

  var slice = Array.prototype.slice,
      isArray = Array.isArray

  var arg = function (n) {
    return function () {
      return arguments[n]
    }
  }

  var identity = arg(0),
      index = arg(1)

  var property = function (name) {
    return function (obj) {
      return obj[name]
    }
  }

  var invoke = function (name) {
    var prop = property(name),
        args = slice.call(arguments, 1)

    return function (obj) {
      return prop(obj).apply(obj, args)
    }
  }

  var add = function (n) {
    return function (obj) {
      return obj + n
    }
  }

  var subtract = function (n) {
    return function (obj) {
      return obj - n
    }
  }

  var multiply = function (n) {
    return function (obj) {
      return obj * n
    }
  }

  var divide = function (n) {
    return function (obj) {
      return obj / n
    }
  }

  var prepend = function (str) {
    return function (obj) {
      return str + obj
    }
  }

  var pipe = function () {
    var fns = slice.call(arguments)

    return function () {
      var ctx = this,
          args = slice.call(arguments)

      return fns.reduce(function (memo, fn) {
        if (isArray(memo)) {
          return fn.apply(ctx, memo)
        } else {
          return fn.call(ctx, memo)
        }
      }, args)
    }
  }

  var guard = function (predicate, fn) {
    return function () {
      var args = slice(arguments),
          ctx = this

      if (predicate.apply(ctx, args)) fn.apply(ctx, args)
    }
  }

  var curry = {
    arg: arg,
    identity: identity,
    index: index,
    property: property,
    invoke: invoke,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    append: add,
    prepend: prepend,
    pipe: pipe,
    guard: guard
  }

  if (typeof module !== 'undefined') {
    module.exports = curry
  } else {
    global.curry = curry
  }
}).call(this)
