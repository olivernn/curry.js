var subtract = require('../lib/curry/subtract')

describe('subtract', function () {
  it('should take the param away from the argument', function () {
    var takeTwo = subtract(2)
    assert.equal(takeTwo(5), 3)
  })
})
