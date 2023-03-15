"use strict";
// for (початок, умова, крок) {
//     тіло циклу
// }


// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// for(let i = 0; i == 5; i++){
//     console.log(i);
// }

// console.log(typeof i);

// let i = 0;
// for(; i < 10; i++){
//     console.log(i);
// }


// let i = 0;
// for(; i < 10;) {
//     console.log(i);
//     i++;
// }


// let i = 0;
// for(;;){
//     console.log(i);
//     i++
//     if (i > 10)break;
// }


// for (let i = 0, j = 10; i != j, i++, j--) {
//     console.log(i, "!=", j);
// }


// Завдання


// for(let i = 0; i < 10; i++) {
//     let random = Math.round(Math.random() * 6 + 1);
//     if(random === 4) break;
//     console.log(random);
// }


// Завдання


let i = 0;
let n = 0;

// while(i < 10) {
//     let random = Math.round(Math.random() * 10);
//     if (random == 4) continue;
//     console.log(random);

//     i++;
//     n++;
//     console.log('n: ', n);
// }


// for(let i = 0; i < 10; i++){
//     let random = Math.round(Math.random() * 10);
//     if (random == 4) continue;
//     console.log(random);
// }


// for(let i = 0; i < 10; i++){
    // i != 2 ? console.log("i != 2"): continue
// }


// Виведіть усі числа від 1 до 100, 
// які кратні числу зазначеному користувачем.

// let userNumber = +prompt("Enter number");

// for (let i = 0; i < 100; i++) {

//     let result = i + 1;

//     if(result % userNumber == 0) {
//         console.log(result);
//     }
// }


// Виведіть кожне 4 число користувача, 
// мінімальне та максимальне число вводить користувач


// let min = +prompt("Enter min number");
// let max = +prompt("Enter max number");


// if(min && max) {
//     for(let i = min; i <= max; i += 4){
//         console.log(i);
//         if(i > max) break;
//     }
// }


// Завдання


// let number = +prompt("Enter number");

// console.log((number % number) === 0 && (number % 1) === 0 ? "Просте число" : "Число не таке і просте");


// function primeNumb(num) {
//   if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return "Не просте число";
//       }
//     }
//     return "Просте число";
//   } else {
//     return "Число має бути більше 1";
//   }
// }

// console.log(primeNumb(97)); // тут вводимо число

// let count = 0;
// for (let i = 150; i < 200; i++) {
//     // console.log(i);
//     count++;
//     console.log(count, "стільки разів пройшов цикл");
// }


const box = document.getElementById("box");

// box.textContent = "<mark>HELLO</mark>";
// box.innerContent = "<mark>HELLO</mark>";
// box.innerHTML = "<mark>HELLO</mark>";
// console.log(text);
// console.log(text.textContent);
// console.log(text.innerHTML);

for(let i = 0; i < 10; i++){
    box.innerHTML += `<mark>${i}</mark>`;
}





