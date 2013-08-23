var arg = requirejs('curry/arg')

describe('arg', function () {
  it('should return the argument at the passed index', function () {
    var firstArg = arg(0)
    assert.equal(firstArg('a', 'b', 'c'), 'a')
  })
})
