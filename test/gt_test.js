var gt = require('../lib/curry/gt')

describe('gt', function () {
  it('should return whether the argument is greater than the param', function () {
    var greaterThanTwo = gt(2)
    assert.ok(greaterThanTwo(3))
    assert.ok(!greaterThanTwo(2))
    assert.ok(!greaterThanTwo(1))
  })
})
