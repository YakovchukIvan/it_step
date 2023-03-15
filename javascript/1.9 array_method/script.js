"use strict";
import {fakeUser as consumers, programingLanguage} from "./fakeUser.js";

// console.log('consumers: ', consumers);

let array = [1,2,3,4,5,6, -1, -2, -3, -4];
// console.log('array: ', array);

//* ------- push
//* ------- Додаємо елемнти в кінець масиву

let arr_1 = [1,2,3]
arr_1.push(4);
arr_1.push(4, 5, 6, [2,3,4], {name: "Jack"});
// console.log('arr_1: ', arr_1);


//* ------- unshift
//* ------- Додаємо елементи на початок масиву

let arr_2 = [-1, -2, -3, -4];
arr_2.unshift(-7, -7, -7, -7);

// console.log('arr_2: ', arr_2);


//* ------- shift
//* ------ Видаляє елемент з початку масива

let arr_3 = [1,2,3];
arr_3.shift();
// console.log('arr_3: ', arr_3);


//* ------- pop
//* ------ Видаляє останній елемент масиву
let arr_4 = [1,2,3]
arr_4.pop()
// console.log('arr_4: ', arr_4);

arr_4.length = arr_4.length - 1;
// console.log('arr_4: ', arr_4);


//* ------- reverse
//* ------ Змінює порядок елементів масиву(як flex-wrap)
let arr_5 = [1,2,3,4]
arr_5.reverse()
// console.log('arr_5: ', arr_5);


//* ------- join
//* ------ створюємо рядок з елементів масиву
let arr_6 = [1,2,3,4]
// console.log('arr_6: ', arr_6.join());


// document.querySelector(".output").textContent = arr_6.join(" ")


//* ------- slice
//* ------ повертає новий масив із заданих start, end
//* end - не є обовязковим аргументом
let arr_7 = [1,2,3,4,5,6, -1, -2, -3, -4];
// arr_7.slice(start, end)
// console.log('arr_7: ', arr_7.slice(3, 6));

// console.log(arr_7.slice(-3));
// console.log(arr_7.slice(-1)); // отримуємо останній елемент масиву


//* at
//* 
let arr_8 = [1,2,3,4,5,6, -1, -2, -3, -4];
// console.log('arr_8: ', arr_8.at(0));
// console.log('arr_8: ', arr_8.at(-1));


//* ------- includes
//* ------ 
let arr9 = ["Hello", "Jack", "JavaScript", "Java"];
// console.log(arr9.includes("Jack")); // true
// console.log(arr9.includes("Java")); // true
// console.log(arr9.includes("JavaS")); // false


//* ------- splice
//* ------

let arr_10 = [1, 2, 3];
arr_10.splice(0, 2)
// console.log('arr_10: ', arr_10);
arr_10.splice(0, 2, "4", "5")
// console.log('arr_10: ', arr_10);


//* ------- concat
//* ------ створює новий масив в які копіює значення інших масивів
let arr_11 = [1, 2, 3]
let arr_12 = [4, 5, 6]

let twoArr = arr_11.concat(arr_12)
// console.log('twoArr: ', twoArr);

let alpha = ["a", "b", "e"]
let alphaNumeric = alpha.concat(1, [2,3]);
// console.log('alphaNumeric: ', alphaNumeric); // ['a', 'b', 'e', 1, 2, 3]


//for ES6
// замість concat можна використати spread оператор
let arr_13 = [1, 2, 3]
let arr_14 = [4, 5, 6]

let spreadArray = [ ...arr_13, ...arr_14];
// console.log('spreadArray: ', spreadArray);


// ------- sort
const array_1 = ["🥚", "🐔"];
// console.log(array_1.sort());
const arr_number = [44,33,22,55,665,77]
// console.log(arr_number.sort());
const arr_letter = ["a", "A", "b", "B", "c", "C"];
// console.log(arr_letter.sort());


let sortNumber = arr_number.sort((a, b) => {
    // return a - b // [22, 33, 44, 55, 77, 665]
    // return b - a //  [665, 77, 55, 44, 33, 22]
}
)
// console.log(sortNumber);

const users = [
    {name: "Jack", age: 18},
    {name: "Pan Roman", age: 27},
    {name: "John", age: 18},
    {name: "Anna", age: 12},
    {name: "Den", age: 10},
    {name: "Lora", age: 21},
]

function userSort(a,b) {
    return a.age - b.age
}

const sortUsers = users.sort(userSort)
// console.log('sortUsers: ', sortUsers);


//* --- forEach
let newArr = []
let array2 = [1,2,3,4,5,6, -1, -2, -3, -4]

array2.forEach(el => {
    // console.log(el**2);
})
//* --------
const multyply = (el) => {
    // console.log(el**2);
}

array2.forEach(multyply)


array2.forEach(item => {
    newArr.push(item)
    // console.log("*", item);
})

// console.log('newArr: ', newArr);

let manufacture = ["TesLA", "BmW", "RAV4", "FORD FoCUS", "PeugEot", "LanoS"]

manufacture.forEach( (currenValue, index, array) =>{
    // console.log(`
    // currenValue - ${currenValue.toLowerCase()},
    // index - ${index},
    // array - ${array}
    // `);
} )


// map
let arr_17 = [12,34,54,6,32]
let new_arr17 = []

new_arr17 = arr_17.map(elem => {
    return elem*=elem;
})

// console.log('new_arr17: ', new_arr17);

let arr_18 = ["foo", "bar", "bazar", "Acess is by invitation"].map(word => word.length )
// console.log('arr_18: ', arr_18);

//
let userInfo = consumers.map(consumers => {
    return {
    name: consumers.name,
    email: consumers.email,
    website: consumers.website
    }
})

// console.log('userInfo: ', userInfo);

// Деструктуризація обєкта
let userInfo2 = consumers.map(({name, email, website}) => {
    return {
        name: name,
        email: email,
        website: website
    }
})

// console.log('userInfo2: ', userInfo2);



// console.log(userBlock);

const ul = document.createElement("ul")
ul.className = "list"
userBlock.appendChild(ul)

ul.innerHTML = consumers.map(({name, email}) => {
    return `
        <li>${name} - ${email}</li>
    `
}).join('')


let userInfo3 = consumers.map(({website, email}) => {
    return `
    <li>${website} - ${email}</li>
    `
}).join('')


userBlockContainer.innerHTML = userInfo3;

// filter 

console.clear();
let arr_number42 = [42, -24, 32, -12, 2, 51, 23, -66, -765, 35, 5]

const filterArray = arr_number42.filter(arr => arr > 0)
const filterOdd = arr_number42.filter(arr => arr % 2 === 0 && arr > 0)

// console.log('filterArray: ', filterArray);
// console.log('filterOdd: ', filterOdd);


/// --- programingLanguage
console.log(programingLanguage);

const popularity = programingLanguage.filter(language => language.popularity > 10)
console.log('popularity: ', popularity);


const popularity2 = programingLanguage
.filter(({popularity}) => popularity > 10)
.sort((a, b) => a.popularity - b.popularity)

console.log('popularity2: ', popularity2);

console.clear()

// every & some 
// every - кожен 
// some - деякі (хоча би один)

const arr_number43 = [42, -24, 32, -12, 2, 51, 23, -66, -765, 35, 5]

const positiveNumbers = arr_number43.every((number) => number > 0)
console.log('positiveNumbers: ', positiveNumbers); 
// false тому що у масиві є хоча б одне число менше за 0


const positiveNumbers2 = arr_number43.some((number) => number > 0)
console.log('positiveNumbers2: ', positiveNumbers2); 
// true тому що у масиві є деякі числа більше за 0

// чи є телефони у всіх юзерів
const isPhone = consumers.every(consumers => consumers.phone)
console.log('isPhone: ', isPhone);


console.clear()

//* ------- reduce
// console.log(arr_number43);
const arr_number44 = [42, -24, 32, -12, 2, 51, 23, -66, -765, 35, 5]

const sumNumberOfArray = arr_number44.reduce((sum, elem) => {
    return sum += elem
})

console.log('sumNumberOfArray: ', sumNumberOfArray);

const arrNumber = [
    [0,1],
    [1,2],
    [3,5],
    [5,7]
]
let newArrNumber = []

newArrNumber = arrNumber.reduce((prev, elem) => {
    // return prev.concat(elem)
    return [...prev, ...elem]
})

console.log("newArrNumber", newArrNumber);


// arguments
function testArguments(a,b,c) {
    console.log(arguments);
    console.log(arguments.length);
    
    const arrArguments = [...arguments];
    console.log('arrArguments: ', arrArguments);
    
    console.log('func.name: ', testArguments.name);
}
testArguments(1,2,3);


