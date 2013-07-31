if (typeof require !== 'undefined') {
  var assert = require('chai').assert,
      curry = require('./../curry.js')
}

describe('curry', function () {
  describe('arg', function () {
    it('should return the argument at the passed index', function () {
      var firstArg = curry.arg(0)

      assert.equal(firstArg('a', 'b', 'c'), 'a')
    })
  })

  describe('identity', function () {
    it('should return the first argument', function () {
      assert.equal(curry.identity('a', 'b', 'c'), 'a')
      assert.equal(curry.identity(), undefined)
    })
  })

  describe('index', function () {
    it('should return the second argument', function () {
      assert.equal(curry.index('a', 'b', 'c'), 'b')
      assert.equal(curry.index('a'), undefined)
    })
  })

  describe('property', function () {
    it('should return the named property from its argument', function () {
      var fooProperty = curry.property('foo')
      assert.equal(fooProperty({'foo': true}), true)
      assert.equal(fooProperty({'bar': true}), undefined)
    })
  })

  describe('invoke', function () {
    describe('without arguments', function () {
      it('should return the result of invoking the function with the given name', function () {
        var downcase = curry.invoke('toLowerCase')
        assert.equal(downcase("HELLO"), "hello")
      })
    })

    describe('with arguments', function () {
      it('should pass the arguments to the function with the given name', function () {
        var indexOfOne = curry.invoke('indexOf', 1)
        assert.equal(indexOfOne([1,2]), 0)
      })
    })
  })

  describe('maths', function () {
    describe('add', function () {
      it('should add two numbers together', function () {
        var addTwo = curry.add(2)
        assert.equal(addTwo(5), 7)
      })
    })

    describe('subtract', function () {
      it('should subtract', function () {
        var takeTwo = curry.subtract(2)
        assert.equal(takeTwo(7), 5)
      })
    })

    describe('multiply', function () {
      it('should multiply', function () {
        var timesTwo = curry.multiply(2)
        assert.equal(timesTwo(7), 14)
      })
    })

    describe('divide', function () {
      it('should multiply', function () {
        var half = curry.divide(2)
        assert.equal(half(14), 7)
      })
    })
  })

  describe('append', function () {
    it('should append to its argument', function () {
      var px = curry.append('px')
      assert.equal(px(49), '49px')
    })
  })

  describe('prepend', function () {
    it('should prepend to its argument', function () {
      var dollars = curry.prepend('$')
      assert.equal(dollars(50), '$50')
    })
  })

  describe('pipe', function () {
    it('combines multiple functions', function () {
      var half = curry.divide(2),
          percent = curry.append('%'),
          halfPercent = curry.pipe(half, percent)

      assert.equal(halfPercent(100), '50%')
    })

    it('maintains the original context', function () {
      var obj = {}, ctx

      curry.pipe(function () { ctx = this }).call(obj)
      assert.strictEqual(ctx, obj)
    })
  })

  describe('guard', function () {
    it('halts unless predicate is true', function () {
      var called = false,
          predicate = function () { return false }

      curry.guard(predicate, function () { called = true})()

      assert.ok(!called)
    })

    it('passes if predicate is true', function () {
      var called = false,
          predicate = function () { return true }

      curry.guard(predicate, function () { called = true })()

      assert.ok(called)
    })
  })
})
