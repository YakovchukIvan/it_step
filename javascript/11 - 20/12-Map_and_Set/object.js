"use sctict"

// Object.entries повертає ключ і значення
console.log(Object.entries(userProfileObject)); // Array 

// Object.fromEntries повертає обєкт з масиву - ключ: значенні

console.clear()
console.log(Object.fromEntries(userProfArra)); // Object

console.clear()

//? Object.keys повертає масив ключів
console.log(Object.keys(userProfileObject)); // Array(масив) ['name', 'age', 'years-active']

//? Object.values повертає масив значень
console.log(Object.values(userProfileObject));// Array(масив) 

console.clear()

//? for ... of - цикл призначений для проходження по спископодібних обєектів
for (let value of Object.values(userProfileObject)) {
    console.log(value);
}








