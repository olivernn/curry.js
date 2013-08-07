var prepend = requirejs('curry/prepend')

describe('prepend', function () {
  it('should prepend to its argument', function () {
    var dollars = prepend('$')
    assert.equal(dollars(50), '$50')
  })
})
