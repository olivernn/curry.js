define(function () {
  var slice = Array.prototype.slice

  return function () {
    var fns = slice.call(arguments)

    return function () {
      var args = slice.call(arguments),
          ctx = this

      return fns.map(function (fn) {
        return fn.apply(ctx, args)
      })
    }
  }
})
