"use strict"

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asdqdqwodq');

// if (hamburger === 3 && cola === 1 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

const hamburger = 3; // false
const fries = 3; // true
const cola = 0; // false
const nuggets = 2; // true

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

// Комбинация Операторов

// Оператор НЕ "!"
console.log(!0); /* выведется true тк оператор "НЕ" выдает обратное значеие */


/* Вывод: 
&& - оператор "И" запинается на лжи
|| - оператор "ИЛИ" запинается на правде */