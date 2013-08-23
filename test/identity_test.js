var identity = requirejs('curry/identity')

describe('identity', function () {
  it('should return its first argument', function () {
    assert.equal(identity('a'), 'a')
  })
})
