define(function () {
  return function (n) {
    return function () {
      return arguments[n]
    }
  }
})
