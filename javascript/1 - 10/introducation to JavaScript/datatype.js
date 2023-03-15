"use strict"; 

//number
// let numberExample = 42;
// console.log(numberExample);
// console.log("typeof:", typeof numberExample);

//string
// let stringExample = "42";
// console.log(stringExample);
// console.log("typeof:", typeof stringExample);

// let priceBook = "9"
// console.log("priceBook", priceBook + priceBook, "$");

//boolean 
// let isActive = true;
// console.log('isActive: ', isActive);
// isActive = false;
// console.log('isActive: ', isActive);

// console.log(isActive == 0);

// // undefined
// let a;
// console.log("a: ", a);
// console.log("typeof:", typeof a);

// // null
// let header = document.querySelector(".header");
// console.log('header: ', header);
// console.log(typeof header);

// let type = typeof header;
// console.log(typeof type == "string");

// object
// const objCar = {
//     name: 'audi',
//     price: 24000,
//     sale: true,
// }
// console.log(objCar.price);
// console.log(typeof objCar.name);

// let array = [12,23,4,56,678,3546,2345]; //масив
// console.log('array: ', array);
// console.log(typeof array);

// const arr = ["hello", NaN, true, false, undefined, null];
// console.log('arr: ', arr);

// bigInt

// const hugeBin = BigInt(
//     "@b111111111111111111111111111111" //не правильне значення
// );
    
// console.log("hugeBin: ", hugeBin);
// console.log(typeof hugeBin);

const example = 2;
// example = 3;

const objCar = {
    name: "Audi",
    price: 24000,
    sale: true,
}
objCar.name = "BMW";
console.log(objCar);
