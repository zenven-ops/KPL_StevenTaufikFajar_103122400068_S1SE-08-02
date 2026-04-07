/**
 * @param {number} value
 * @returns {string|number}
 * @throws {Error}
 */
function zzzzOrNum(value) {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    throw new Error("Input zzzzOrNum harus berupa bilangan bulat!");
  }

  if (value % 15 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return value;
  }
}

/**
 * @param {number[]} sequence
 * @returns {(number|string)[]}
 * @throws {Error}
 */
function fizzBuzz(sequence) {
  if (!Array.isArray(sequence)) {
    throw new Error("Input fizzBuzz harus berupa larik (array)!");
  }

  const newSequence = sequence.map((e) => zzzzOrNum(e));

  return newSequence;
}

module.exports = {
  fizzBuzz: fizzBuzz,
  zzzzOrNum: zzzzOrNum,
};