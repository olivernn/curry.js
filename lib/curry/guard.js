var slice = Array.prototype.slice

module.exports = function (predicate, fn) {
  return function () {
    var args = slice.call(arguments),
        ctx = this

    if (predicate.apply(ctx, args)) return fn.apply(ctx, args)
  }
}
