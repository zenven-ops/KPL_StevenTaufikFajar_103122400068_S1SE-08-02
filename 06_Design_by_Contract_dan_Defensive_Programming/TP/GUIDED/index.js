/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function div(a, b) {
    // prakondisi
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Argumen harus number");
    }

    if (b === 0) {
        throw new Error("Tidak bisa dibagi dengan nol");
    }

    const hasil = a / b;

    return hasil;
}

console.log(div(20, 40)); 