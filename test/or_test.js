var or = requirejs('curry/or')

describe('or', function () {
  var noop = function () {}

  it('should throw a RangeError if less than 2 args are used', function () {
    assert.throw(function () { or(noop) }, RangeError, /Must have at least two arguments/)
  })

  it('passes its arguments to all fns', function () {
    var aArgs, bArgs,
        slice = Array.prototype.slice,
        a = function () { aArgs = slice.call(arguments) ; return false },
        b = function () { bArgs = slice.call(arguments) ; return false },
        fn = or(a, b)

    fn(1,2,3)

    assert.deepEqual(aArgs, [1,2,3])
    assert.deepEqual(bArgs, [1,2,3])
  })

  it('returns the logical or of the result of its params', function () {
    var a = function () { return false },
        b = function () { return true },
        fn = or(a, b)

    assert.ok(fn(1,2,3))
  })

  it('passes the original context to all functions', function () {
    var aCtx, bCtx, ctx = {},
        a = function () { aCtx = this ; return false },
        b = function () { bCtx = this ; return false },
        fn = or(a, b)

    fn.call(ctx, 1, 2, 3)

    assert.strictEqual(aCtx, ctx)
    assert.strictEqual(bCtx, ctx)
  })

  it('halts calling functions early', function () {
    var aCalled, bCalled,
        a = function () { return aCalled = true },
        b = function () { return bCalled = true },
        fn = or(a, b),
        result = fn()

    assert.ok(result)
    assert.ok(aCalled)
    assert.ok(!bCalled)
  })
})
