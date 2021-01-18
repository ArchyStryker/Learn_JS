"use strict";

function pow(x, n) {
    if (n % 1 != 0) return('Введеное значение не поддерживаются, введите целое число');
    if (n <= 0) return(`Степень ${n} не поддерживается, введите целую степень, большую 0`);

    let result = x ** n;
    return result;
}

let x = prompt('x?', ' ');
let n = prompt('n?', ' ');

console.log (pow(x, n));
