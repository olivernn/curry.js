module.exports = function (name) {
  return function (obj) {
    return obj[name]
  }
}
