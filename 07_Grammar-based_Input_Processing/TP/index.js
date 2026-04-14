/**
 * @param {string | string[]} number
 * @returns {number[]}
 */
function toNumberArray(number) {
  const arr = Array.isArray(number) ? number : number.split(',');

  return arr
    .map(str => str.trim())
    .filter(str => str !== "")
    .map(str => Number(str))
    .filter(num => !isNaN(num));
}

console.log(toNumberArray("1, 2"))
console.log(toNumberArray(["1", "2"]))
console.log(toNumberArray(" 11,55,33   "))
console.log(toNumberArray(["0.2", "-11", "abc23"]))