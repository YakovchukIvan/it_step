"use strict";

// Округлення вниз
console.log("Math.floor(1.2): ", Math.floor(1.2));

// Математичне до найближчого цілого
console.log("Math.round(1.2): ", Math.round(1.2));
console.log("Math.round(1.2): ", Math.round(1.6));

// Округлення вверх
console.log("Math.ceil(1.2): ", Math.ceil(1.2));

// Видаляє все після крапки
console.log("Math.trunc(1.23424): ", Math.trunc(1.23424));

// Показує число ПІ
console.log("Math.PI: ", Math.PI); // показує число PI

// Зводить до степеню
console.log("Math.pow(5, 2): ", Math.pow(5, 2));

// Корінь 
console.log("Math.sqrt(16): ", Math.sqrt(16));

//
let x = 33;
let y = 144;
// Отримуємо мінімальне значення
console.log(Math.min(x, y));

// Отримуємо максимальне значення
console.log(Math.max(x, y));

// Math.min при роботі з масивом
let array = [23, 45, 56, 78, 89, 34, 45, 56];
console.log('array: ', ...array); // три крапочки ... розпаковують массив
console.log(Math.min(...array));
console.log(Math.max(...array));


// Отримуємо модуль числа
console.log(Math.abs(-42));
console.log(Math.abs(x - y));

// отримуємо пвевдовипадкове число
console.log(Math.random());

// отримуємо пвевдовипадкове число від 0 до 9
console.log(Math.floor(Math.random() * 10));

// отримуємо пвевдовипадкове число від 0 до 9
console.log(Math.floor(Math.random() * 10) + 1);