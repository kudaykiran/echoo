
var assert = require('assert');
var utils = require('../server/utils/index');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('index', function () {
    it('should return \'\' when the page is not present', function () {
        assert.equal(utils.pageQuery(), '');
    });
    // it('should return value when the page is  present', function () {
    //     assert.equal(utils.pageQuery('abc'), '&page=abc');
    // });
});