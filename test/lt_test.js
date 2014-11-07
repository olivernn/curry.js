var lt = require('../lib/curry/lt')

describe('lt', function () {
  it('should return whether the argument is less than the param', function () {
    var lessThanTwo = lt(2)
    assert.ok(lessThanTwo(1))
    assert.ok(!lessThanTwo(2))
    assert.ok(!lessThanTwo(3))
  })
})
