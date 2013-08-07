var guard = requirejs('curry/guard'),
    property = requirejs('curry/property'),
    invoke = requirejs('curry/invoke')

describe('guard', function () {
  it('halts unless predicate is true', function () {
    var called = false,
        predicate = function () { return false }

    guard(predicate, function () { called = true})()

    assert.ok(!called)
  })

  it('passes if predicate is true', function () {
    var called = false,
        predicate = function () { return true }

    guard(predicate, function () { called = true })()

    assert.ok(called)
  })

  it('passes the original context to the predicate', function () {
    var obj = {}, ctx,
        predicate = function () { ctx = this; return false }

    guard(predicate).call(obj)
    assert.strictEqual(ctx, obj)
  })

  it('passes the original context to fn', function () {
    var obj = {}, ctx,
        predicate = function () { return true }

    guard(predicate, function () { ctx = this }).call(obj)
    assert.strictEqual(ctx, obj)
  })

  it('passes arguments to the predicate', function () {
    var obj = {}, args,
        predicate = function () { args = arguments; return false }

    guard(predicate)(obj)
    assert.strictEqual(args[0], obj)
  })

  it('passes arguments to fn', function () {
    var obj = {}, args,
        predicate = function () { return true }

    guard(predicate, function () { args = arguments })(obj)
    assert.strictEqual(args[0], obj)
  })

  describe('use-case', function () {
    var Model = function (valid) {
      this.valid = valid
      this.saved = false
    }

    Model.prototype.save = function () {
      this.saved = true
    }

    var saveIfValid = guard(property('valid'), invoke('save'))

    it('saves when valid', function () {
      var m = new Model (true)
      saveIfValid(m)
      assert.ok(m.saved)
    })

    it('does not save when invalid', function () {
      var m = new Model (false)
      saveIfValid(m)
      assert.ok(!m.saved)
    })
  })
})
