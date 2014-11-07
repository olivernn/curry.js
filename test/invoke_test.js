var invoke = require('../lib/curry/invoke')

describe('invoke', function () {
  describe('without arguments', function () {
    it('should return the result of invoking the method with the given name', function () {
      var downcase = invoke('toLowerCase')
      assert.equal(downcase('HELLO'), 'hello')
    })
  })

  describe('with arguments', function () {
    it('should pass the arguments to the method with the given name', function () {
      var indexOfOne = invoke('indexOf', 1)
      assert.equal(indexOfOne([1,2]), 0)
    })
  })

  describe('when the property is undefined', function () {
    it('should throw an error', function () {
      var nonApplyable = invoke('foo')
      assert.throw(function () { nonApplyable("string")}, TypeError, /target is undefined/)
    })
  })

  describe('when the property is non applyable', function () {
    it('should throw an error', function () {
      var nonApplyable = invoke('length')
      assert.throw(function () { nonApplyable("string")}, TypeError, /length is not applyable/)
    })
  })
})
