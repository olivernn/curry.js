var pipe = require('../lib/curry/pipe'),
    divide = require('../lib/curry/divide'),
    add = require('../lib/curry/add')

describe('pipe', function () {
  it('combines multiple functions', function () {
    var half = divide(2),
        percent = add('%'),
        halfPercent = pipe(half, percent)

    assert.equal(halfPercent(100), '50%')
  })

  it('maintains the original context', function () {
    var obj = {}, ctx

    pipe(function () { ctx = this }).call(obj)
    assert.strictEqual(ctx, obj)
  })
})
