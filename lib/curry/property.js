define(function () {
  return function (name) {
    return function (obj) {
      return obj[name]
    }
  }
})
