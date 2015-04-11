module.exports = function (pages, done) {
  pages.forEach(function (val, key) {
    if (key - 1 > -1) {
      pages[key].next = pages[key - 1]
    }

    if (key + 1 < pages.length) {
      pages[key].previous = pages[key + 1]
    }
  })

  done(null, pages)
}
