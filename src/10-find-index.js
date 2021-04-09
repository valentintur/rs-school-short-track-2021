/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  array.sort((a, b) => a - b).forEach((el, i) => {
    if (el === value) {
      return i;
    }
    return 0;
  });
  return 0;
}

module.exports = findIndex;
