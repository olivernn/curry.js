var property = requirejs('curry/property')

describe('property', function () {
  var fooProperty

  before(function () {
    fooProperty = property('foo')
  })

  it('should return the given property from its first argument', function () {
    assert.equal(fooProperty({'foo': 1}), 1)
  })

  it('should return undefined when the property is missing', function () {
    assert.equal(fooProperty({'bar': 1}), undefined)
  })
})
