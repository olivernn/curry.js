var eql = require('../lib/curry/eql')

describe('eql', function () {
  it('should compare equality with ==', function () {
    var eqlOne = eql(1)
    assert.ok(eqlOne(1))
    assert.ok(eqlOne('1'))
    assert.ok(!eqlOne(2))
  })
})
