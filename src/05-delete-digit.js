/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  /* throw new Error('Not implemented'); */

  let result = 0;
  let cacheStr = '';

  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    cacheStr = str.slice(0, i) + str.slice(i + 1);
    if (Number(cacheStr) > result) {
      result = Number(cacheStr);
    }
  }

  return result;
}

module.exports = deleteDigit;
