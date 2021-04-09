/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

function getEmailDomain(email) {
  const arr = email.split('');
  let result = email;
  while (result.includes('@')) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '@') {
        result = email.slice(i + 1);
      }
    }
  }
  return result;
}

module.exports = getEmailDomain;
