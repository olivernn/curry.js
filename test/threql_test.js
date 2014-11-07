var threql = require('../lib/curry/threql')

describe('threql', function () {
  it('should compare equality with ===', function () {
    var eqlOne = threql(1)
    assert.ok(eqlOne(1))
    assert.ok(!eqlOne('1'))
    assert.ok(!eqlOne(2))
  })
})
