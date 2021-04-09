/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new Error('Not implemented');
  /*  let objS1, objS2 = {};
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let cache = '';
  let sum = 0;
  for (let i = 0; i < arrS1.length; i++) {
    cache = arrS1[i];
    if (objS1[cache] != 'undefined') {
      objS1[cache] +=1;
    } else {
      objS1[cache] = 1;
    }
  }   */
}

module.exports = getCommonCharacterCount;
