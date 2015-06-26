require('mocha');
var assert = require('chai').assert;
var j5 = require("../j5");

var result = null;
describe('j5', function() {
  describe('.on()', function() {
    it('Should turn a led on', function(done) {
      this.timeout(10000);
      setTimeout(function() {
        result = j5.on();
        assert.equal(result, 1);
        done();
      }, 5000);
    });
  });

  describe('.off()', function() {
    it('Should turn a led off', function() {
      // var res = j5.on();
      // expect(res).to.equal(0);
    });
  });
});