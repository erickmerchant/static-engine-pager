var assert = require('assert')
var describe = require('mocha').describe
var it = require('mocha').it
var pager = require('./index.js')

describe('plugin', function () {
  it('it should work with zero pages', function (done) {
    pager([], function (err, pages) {
      if (err) {
        throw err
      }

      assert.deepEqual(pages, [])

      done()
    })
  })

  it('it should work with one page', function (done) {
    pager([{title: 'one'}], function (err, pages) {
      if (err) {
        throw err
      }

      assert.deepEqual(pages, [{title: 'one'}])

      done()
    })
  })

  it('it should work with two pages', function (done) {
    pager([{title: 'one'}, {title: 'two'}], function (err, pages) {
      if (err) {
        throw err
      }

      assert.deepEqual(pages[0].previous, pages[1])
      assert.deepEqual(pages[1].next, pages[0])

      done()
    })
  })

  it('it should work with more pages', function (done) {
    pager([{title: 'one'}, {title: 'two'}, {title: 'three'}], function (err, pages) {
      if (err) {
        throw err
      }

      assert.deepEqual(pages[0].previous, pages[1])
      assert.deepEqual(pages[1].previous, pages[2])
      assert.deepEqual(pages[1].next, pages[0])
      assert.deepEqual(pages[2].next, pages[1])

      done()
    })
  })
})