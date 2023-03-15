"use strict";

// let number = 42;

// if(number > 30){
//     console.log("number > 30");
// } else if(number < 30 && number > 0){
//     console.log("number < 30");
// } else {
//     console.log("else");
// }


// let age = 18;

// let assessAllowed = age >= 18 ? "Достyп дозволено" : "У доступі відмовлено" ;
// console.log('assessAllowed: ', assessAllowed);


// let message =
//   age <= 3 && age > 0
//     ? "Привіт, малеча"
//     : age < 18 && age > 3
//     ? "Привіт, тобі менше 1"
//     : age >= 18 && age < 65
//     ? "Привіт, ви повнолітні"
//     : age >= 65 && age <= 123
//     ? "Привіт, мої шанування"
//     : "Який незвичний вік :)";


// let result = 3 + 2;


// switch(result) {
//     case 3:
//         console.log("Мало");
//         break;
//     case 5:
//         console.log("Правильно");
//         break;
//     case 6:
//         console.log("Забагато");
//         break;
//     default:
//         console.log("Я не знаю таких значень");
// }

// let age = +prompt("Enter your age");


// switch(true){
//     case age <= 3 && age > 0:
//         console.log("Привіт, малеча");
//         break;
//     case age < 18 && age > 3:
//         console.log("Привіт, тобі менше 18");
//         break;
//     case age >= 18 && age < 65:
//         console.log("Привіт, ви повнолітні");
//         break;
//     case age >= 65 && age <= 123:
//         console.log("Привіт, мої шанування");
//         break;
//     default:
//         console.log("Який незвичний вік :)");
// }


// let age = prompt("Enter your age");

// switch(age){
//     case "12":
//     case 12:
//         console.log("Ваш вік 12 років");
//         break;
//     default:
//         console.log("Який незвичний вік :)");
// }


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Ми підтримуємо і ці браузери' );
//     break;

//   default:
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// let browser = prompt("Введіть ваш браузер: \n Edge \n Chrome \n Firefox \n Safari \n Opera");

// if (browser === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera"){
//     alert( 'Ми підтримуємо і ці браузери' );
// } else {
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// let month = +prompt("Введіть номер місяця: ");

// switch (month) {
//     case 1:
//         console.log("Січень");
//         break;
//     case 2:
//         console.log("Лютий");
//         break;
//     case 3:
//         console.log("Березень");
//         break;
//     case 4:
//         console.log("Квітень");
//         break;
//     case 5:
//         console.log("Травень");
//         break;
//     case 6:
//         console.log("Червень");
//         break;
//     case 7:
//         console.log("Липень");
//         break;
//     case 8:
//         console.log("Серпень");
//         break;
//     case 9:
//         console.log("Вересень");
//         break;
//     case 10:
//         console.log("Жовтень");
//         break;
//     case 11:
//         console.log("Листопад");
//         break;
//     case 12:
//         console.log("Грудень");
//         break;
//     default:
//         console.log("Такого місяця не існує");
// }


// let coordinateX = +prompt("Введіть координату Х: ");
// let coordinateY = +prompt("ВВедіть координату У: ");

// console.log('coordinateX: ', coordinateX);
// console.log('coordinateY: ', coordinateY);


// if (coordinateX > 0 && coordinateY > 0) {
//     console.log("Це буде перша четверть");
// } else if (coordinateX < 0 && coordinateY > 0) {
//     console.log("Це буде друга четверть");
// } else if (coordinateX < 0 && coordinateY < 0) {
//     console.log("Це буде третя четверть");
// } else if (coordinateX > 0 && coordinateY < 0) {
//     console.log("Це буде четверта четверть");
// } else if (coordinateX === 0){
//     console.log("Буде на осі Y");
// } else if (coordinateY === 0){
//     console.log("Буде на осі X");
// } else {
//     console.log("Спробуйте ще раз");
// }


let x = +prompt("Введіть координату Х: ");
let y = +prompt("ВВедіть координату У: ");

let result = x > y ? x : y;
console.log(`число ${result} більше`);


