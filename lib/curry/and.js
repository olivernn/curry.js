var slice = Array.prototype.slice

module.exports = function () {
  var fns = slice.call(arguments)

  if (fns.length < 2) throw new RangeError ("Must have at least two arguments")

  return function () {
    var args = slice.call(arguments),
        ctx = this

    return fns.slice(1).reduce(function (memo, fn) {
      if (!memo) {
        return false
      } else {
        return fn.apply(ctx, args)
      }
    }, fns[0].apply(ctx, args))
  }

}
