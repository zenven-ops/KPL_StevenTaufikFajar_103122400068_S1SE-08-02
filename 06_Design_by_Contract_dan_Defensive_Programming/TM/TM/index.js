/**
 * @param {number} number
 */
function is_not_fizzbuzz(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("Input harus berupa bilangan bulat murni.");
  }
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }
  return true;
}

module.exports = is_not_fizzbuzz;