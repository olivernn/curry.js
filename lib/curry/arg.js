module.exports = function (n) {
  return function () {
    return arguments[n]
  }
}
