var add = requirejs('curry/add')

describe('add', function () {
  describe('with numbers', function () {
    it('should return the result of adding the param with the argument', function () {
      var addTwo = add(2)
      assert.equal(addTwo(2), 4)
    })
  })

  describe('with strings', function () {
    it('should concatenate the strings', function () {
      var addBar = add(' bar')
      assert.equal(addBar('foo'), 'foo bar')
    })
  })
})
