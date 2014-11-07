var assert = require('chai').assert;
var first = require('../index.js');

describe('plugin', function(){

    var plugin = first();

    it('it should work with zero pages', function(done){

        plugin([], function(pages, next){

            assert.deepEqual(pages, []);

            done();
        });
    });

    it('it should work with one page', function(done){

        plugin([{title: 'one'}], function(pages, next){

            assert.deepEqual(pages, [{title: 'one'}]);

            done();
        });
    });

    it('it should work with two pages', function(done){

        plugin([{title: 'one'}, {title: 'two'}], function(pages, next){

            assert.deepEqual(pages[0].previous, pages[1]);
            assert.deepEqual(pages[1].next, pages[0]);

            done();
        });
    });

    it('it should work with more pages', function(done){

        plugin([{title: 'one'}, {title: 'two'}, {title: 'three'}], function(pages, next){

            assert.deepEqual(pages[0].previous, pages[1]);
            assert.deepEqual(pages[1].previous, pages[2]);
            assert.deepEqual(pages[1].next, pages[0]);
            assert.deepEqual(pages[2].next, pages[1]);

            done();
        });
    });
});
