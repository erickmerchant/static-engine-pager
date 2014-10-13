module.exports = function () {

    return function (pages, next) {

        pages.forEach(function (val, key) {

            if (key - 1 > -1) {

                pages[key].next = pages[key - 1];
            }

            if (key + 1 < pages.length) {

                pages[key].previous = pages[key + 1];
            }
        });

        next(pages);
    };
};
