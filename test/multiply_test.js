var multiply = require('../lib/curry/multiply')

describe('multiply', function () {
  it('should multiply', function () {
    var timesTwo = multiply(2)
    assert.equal(timesTwo(7), 14)
  })
})
