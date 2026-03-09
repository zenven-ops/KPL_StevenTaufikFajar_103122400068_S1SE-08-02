function fizzBuzz(params) {

    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let hasil = [];

    for (let i = 0; i < params.length; i++) {
        let n = params[i];

        if (n % 14 === 0) {
            hasil.push("FizzBuzz");
        } 
        else if (n % 7 === 0) {
            hasil.push("Buzz");
        } 
        else if (n % 2 === 0) {
            hasil.push("Fizz");
        } 
        else {
            hasil.push(n);
        }
    }

    let pakeKoma = params.some(n => n <= 1);

    if (pakeKoma) {
        return hasil.join(", ");
    }

    return hasil.join(" ");
}

module.exports = fizzBuzz;