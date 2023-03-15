"use strict"

// alert(result);

// let year = +prompt("В якому році ви розпочали вивчати JS?");

// if (year == 2023)  {
//     alert("правильна відповідь");
// } else if(year == 2022) {
//     alert("У 2022 ви почали вивчати HTML and CSS");
// }
// else {
//     alert("Нажаль ви помилилися");
// }


/*
Реалізуйте калькулятор. Користувач вводить два числа, 
а програма виводить результат дій + - * / цих чисел
*/

// let number1 = +prompt("Enter number 1");
// let number2 = +prompt("Enter number 2");
// let symbol = prompt("Введіть дію");

// if (symbol == "+"){
//     let result = number1 + number2;
//     console.log(result);
// } else if(symbol == "-") {
//     let result = number1 - number2;
//     console.log(result);
// } else if(symbol == "*") {
//     let result = number1 * number2;
//     console.log(result);
// }   else if(symbol == "/") {
// let result = number1 / number2;
// console.log(result);
// } else {
//     console.log("Введіть дію + - * /")
// }



// if(2023 === "2023") {
//     console.log("правда");
// } else {
//     console.log("не правда")
// }


// const trueExample = true;

// if(!trueExample){
//     console.log("true");
// } else {
//     console.log("false");
// }
let style = "color: #dfdf29; padding:20px; background: #303030";
// console.log("%c Перевірка віку", style);

// let age = +prompt("Введіть свій вік");

// if(age <= 3 && age > 0){
//     console.log("%c Привіт малеча", style);
// } else if (age > 3 && age < 18) {
//     console.log("%c Привіт тобі менше 18", style);
// } else if (age >= 18 && age < 65) {
//     console.log("%c Привіт, ви повнолітній", style);
// } else if (age >= 65 && age <= 123) {
//     console.log("%c Привіт! Моє шанування", style);
// } else {
//     console.log("У вас дуже незвичайний вік :)");
// }


// if(0){
//     console.log("%c IF", style)
// } else {
//     console.log("%c ELSE", style)
// }


// if(0 || null || undefined || NaN || false || "" || +'c4'){
//     console.log("%c Пoтрапили в IF - TRUE", style)
// } else {
//     console.log("%c Пoтрапили в ELSE - FALSE", style)
// }


// if ((2 === 2 && 3 === 3) || (4 === 4 && 5 === 5)) {
//     console.log("%c Пoтрапили в IF - TRUE", style)
// } else {
//     console.log("%c Пoтрапили в ELSE - FALSE", style)
// }



// Тернарний оператор

// let age = +prompt("Введіть ваш вік");
// let accessAge;
// if(age >= 18) {
//     accessAge = true;
// } else {
//     accessAge = false;15
// }
// console.log(typeof accessAge);

// приклад звичайним if else 



// приклад тернарного оператора

// let age = +prompt("Введіть ваш вік");
// let accessAge = age >= 18 ? true : false;

// console.log(accessAge ? "Доступ дозволено" : "У доступі відмовлено");



// let age = +prompt("Введіть скільки вам років");

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

// let age = +prompt("Введіть свій вік");

// if(age <= 3 && age > 0){
//     console.log("%c Привіт малеча", style);
// } else if (age > 3 && age < 18) {
//     console.log("%c Привіт тобі менше 18", style);
// } else if (age >= 18 && age < 65) {
//     console.log("%c Привіт, ви повнолітній", style);
// } else if (age >= 65 && age <= 123) {
//     console.log("%c Привіт! Моє шанування", style);
// } else {
//     console.log("У вас дуже незвичайний вік :)");
// }


// let number = 2 > 3 ? false : true; TRUE
// console.log('number: ', number);


// let number = 2 > 3 ? true : false; FALSE
// console.log('number: ', number);


// let number = 2 > 3 ? false : true;

// let oher = 5 - 5  ? true : false;
// console.log('oher: ', oher);


// let isLoading;
// console.log(typeof isLoading);
// isLoading = true;

// if(isLoading){
//     console.log("Завантаження");
// } else {
//     console.log("Завершено");
// }


// let variable;
// if(
//     variable != null && 
//     variable != undefined && 
//     variable != "" && 
//     variable != NaN ) 
// {
//     console.log(`${variable} доступна для роботи0`);
// } else {
//     console.log(`variable = ${variable}`);
// }
// variable = 2;

// if (variable) console.log(variable);

let age = 18;
// let accessAge = age >= 18 ? true : false;
let accessAge = age >= 18;
console.log('accessAge: ', accessAge);