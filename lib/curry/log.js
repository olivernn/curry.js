var slice = Array.prototype.slice

module.exports = function () {
  var args = slice.call(arguments)
  console.log(args)
  return args
}
