var divide = requirejs('curry/divide')

describe('divide', function () {
  it('should divide', function () {
    var half = divide(2)
    assert.equal(half(14), 7)
  })
})
