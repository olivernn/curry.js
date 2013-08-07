define(function () {
  var slice = Array.prototype.slice

  return function () {
    var args = slice.call(arguments)
    console.log(args)
    return args
  }
})
