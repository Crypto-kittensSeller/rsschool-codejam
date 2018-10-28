const assert = require('assert');
const sumOfOther = require('../sumOfOther');

describe('Sum of elements excluding current', function() {
      it('should return the array with sum of other elements on each index 1', function() {
        assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
      });

      it('should return the array with sum of other elements on each index 2', function() {
        assert.deepEqual(sumOfOther([0]), [0]);
      });

      it('should return the array with sum of other elements on each index 3', function() {
        assert.deepEqual(sumOfOther([1, 1, 1, 1]), [3, 3, 3, 3]);
      });

      it('should return the array with sum of other elements on each index 4', function() {
        assert.deepEqual(sumOfOther([8, 16, 10, 30, 50]), [106, 98, 104, 84, 64]);
      });

      it('should return the array with sum of other elements on each index 5', function() {
        assert.deepEqual(sumOfOther([1000, 5000, 10000]), [15000, 11000, 6000]);
      });

  });

  