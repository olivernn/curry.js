var slice = Array.prototype.slice

module.exports = function () {
  var fns = slice.call(arguments)

  return function () {
    var args = slice.call(arguments),
        ctx = this

    return fns.map(function (fn) {
      return fn.apply(ctx, args)
    })
  }
}
