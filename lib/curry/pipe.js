define(function () {
  var slice = Array.prototype.slice,
      isArray = Array.isArray

  return function () {
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
})
