var map = requirejs('curry/map'),
    pipe = requirejs('curry/pipe'),
    property = requirejs('curry/property')

describe('map', function () {
  it('passes its arguments to all fns', function () {
    var aArgs, bArgs,
        slice = Array.prototype.slice,
        a = function () { aArgs = slice.call(arguments) },
        b = function () { bArgs = slice.call(arguments) },
        fn = map(a, b)

    fn(1,2,3)

    assert.deepEqual(aArgs, [1,2,3])
    assert.deepEqual(bArgs, [1,2,3])
  })

  it('returns an array of all its arguments returns', function () {
    var a = function () { return 1 },
        b = function () { return 2 },
        fn = map(a, b)

    assert.deepEqual(fn(), [1,2])
  })

  it('passes the original context to all functions', function () {
    var aCtx, bCtx, ctx = {},
        a = function () { aCtx = this },
        b = function () { bCtx = this },
        fn = map(a, b)

    fn.call(ctx)

    assert.strictEqual(aCtx, ctx)
    assert.strictEqual(bCtx, ctx)
  })

  describe('use-case', function () {
    it('works', function () {
      var gather = function () {
        return Math.max.apply(null, arguments)
      }

      var max = pipe(map(property('a'), property('b')), gather)

      var maxVal = max({a: 10, b: 100})

      assert.equal(maxVal, 100)
    })
  })
})
