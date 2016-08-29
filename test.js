var test = require('tape')
var pager = require('./index.js')

test('it should work with zero pages', function (t) {
  pager([], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [])

    t.end()
  })
})

test('it should work with one page', function (t) {
  pager([{title: 'one'}], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [{title: 'one'}])

    t.end()
  })
})

test('it should work with two pages', function (t) {
  pager([{title: 'one'}, {title: 'two'}], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages[0].previous, pages[1])
    t.deepEqual(pages[1].next, pages[0])

    t.end()
  })
})

test('it should work with more pages', function (t) {
  pager([{title: 'one'}, {title: 'two'}, {title: 'three'}], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages[0].previous, pages[1])
    t.deepEqual(pages[1].previous, pages[2])
    t.deepEqual(pages[1].next, pages[0])
    t.deepEqual(pages[2].next, pages[1])

    t.end()
  })
})
