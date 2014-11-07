var index = require('../lib/curry/index')

describe('index', function () {
  it('should return its second argument', function () {
    assert.equal(index('a', 'b'), 'b')
  })
})
