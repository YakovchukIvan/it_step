"use strict";

// Виводимо сьогоднішню дату
let today = new Date();
// console.log('today: ', today);



// Початок відліку, однак потрібно враховувати UTC+3 === GMT+3 (пара лютий місяць)
let startDate = new Date(0);
// console.log('startDate: ', startDate);


// console.log(Date.now());
// console.log(Date.now());

//
let date = new Date("2023-02-15");
// console.log('date: ', date);

let date1 = new Date("02/06/2023");
console.log('date1: ', date1);

let date2 = new Date("Mon Feb 06 2023 00:00:00")
console.log('date2: ', date2);

let date3 = new Date("2023-11-14T02:03:45");
console.log('date3: ', date3);

let date4 = new Date(2022, 0, 8, 19, 12, 18, 400);
// ? рік. місяць 0 - 11, день, години, хвилини, секунди, мілісекунди
console.log('date4: ', date4);

// різниця між датами

let dateMin = new Date("2022-11-11");
let dateMax = new Date("2022-11-31");

let result = dateMax - dateMin;

// console.log(24 / 60 / 60 / 1000);

console.log("різниця в ", result / 24 / 60 / 60 / 1000, "днів");
// порівняння дати

console.log(dateMin < dateMax); // true
console.log(dateMin > dateMax); // false

console.log(dateMin === dateMax); // false
