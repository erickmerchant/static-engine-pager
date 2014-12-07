var assert = require('chai').assert;
var pager = require('../index.js');

describe('plugin', function(){

    it('it should work with zero pages', function(done){

        pager([]).then(function(pages){

            assert.deepEqual(pages, []);

            done();
        });
    });

    it('it should work with one page', function(done){

        pager([{title: 'one'}]).then(function(pages){

            assert.deepEqual(pages, [{title: 'one'}]);

            done();
        });
    });

    it('it should work with two pages', function(done){

        pager([{title: 'one'}, {title: 'two'}]).then(function(pages){

            assert.deepEqual(pages[0].previous, pages[1]);
            assert.deepEqual(pages[1].next, pages[0]);

            done();
        });
    });

    it('it should work with more pages', function(done){

        pager([{title: 'one'}, {title: 'two'}, {title: 'three'}]).then(function(pages){

            assert.deepEqual(pages[0].previous, pages[1]);
            assert.deepEqual(pages[1].previous, pages[2]);
            assert.deepEqual(pages[1].next, pages[0]);
            assert.deepEqual(pages[2].next, pages[1]);

            done();
        });
    });
});
