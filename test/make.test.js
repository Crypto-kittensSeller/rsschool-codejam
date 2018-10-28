const assert = require('assert');
const make = require('../make');


function sum(a, b) {
    return a + b;
}

function mult(a,b) {
    return a * b;
}



describe('Currying implementation for make function', function() {
      it('Should return the right sum', function() {
        assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
      });

      it('should return the right product', function() {
        assert.deepEqual(make(5)(4, 2)(1)(3)(mult), 120);
      });
  });