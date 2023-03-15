"use strict"

// ? setItem - зберігаємо key - value
localStorage.setItem("name", "Jack");
// localStorage.setItem("age", 21);
localStorage.setItem("email", "google@jack.com");
localStorage.setItem("street", "Kulas Light");
localStorage.setItem("city", "Rivne");
localStorage.setItem("zipcode", "92998-3874");
localStorage.setItem("phone", "1-770-736-8031 x56442");

//? getItem - отримати значення за ключем
const name = localStorage.getItem("name")
// console.log(name);

//? removeItem - видаляє дані за ключем
// localStorage.removeItem("age");

//? clear - видаляє все із сховища
// localStorage.clear();

// length - отримуємо к-ть збережених елементів
const length = localStorage.length
// console.log(length);

//? key - отримуємо ключ на заданій позиції
// console.log(localStorage.key(1));

//? звертаємося за ключем
console.log(localStorage.age);

//? перебір 
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    // console.log(key);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

console.clear();
console.log(localStorage);

//! не ок!
// отримуємо значення, а також доступні методи
for (let key in localStorage) {
    console.log("* - ", key);
}
console.clear();


//? Перебір локального сховища for ... in 

for (let key in localStorage){
    if(!localStorage.hasOwnProperty(key)) {
        continue
    }
    console.log(`* ${key}: ${localStorage.getItem(key)}`);
}

console.clear();


//? Перебір локального свховища for ... in & Object.keys
let keys = Object.keys(localStorage);
console.log('keys: ', keys);
for(let key in keys) {
    // console.log(key)
    console.log(`${keys[key]} : ${localStorage.getItem(keys[key])}`);
}



console.clear();


const arr = [12,432,654,234,576,234,467,234]
localStorage.setItem("array", arr);
console.log(localStorage.getItem("array"));
let newArr = localStorage.getItem("array"); // отримуємо рядок замість масива
// console.log(newArr[0] + newArr[1]);

localStorage.clear();
console.clear();

const array = ["Hello", 32, false, NaN, undefined, {a: 1}, [1,2,3,4]]

//? JSON.stringify() - перетворює значення JavaScript у рядок JSON
localStorage.setItem("array without stringify", JSON.stringify(array))
localStorage.setItem("array", JSON.stringify(array))
//? JSON.parse() - розбирає рядок JSON
const newArray = JSON.parse(localStorage.getItem("array"))
console.log('newArray: ', newArray);



//? якщо ключа немає ми отримуємо null
let age = localStorage.getItem("age") || "тут щось можна записати"
console.log('age: ', age);

localStorage.clear();
console.clear();


// this - вказує на обєкт
const obj = {
    name: "Boris",
    age: 43,
    showName: function(){
        console.log(this);
        console.log(this.name)
    }
}
// console.log('obj: ', obj);
// console.log(obj.showName);

obj.showName()

localStorage.setItem("obj", JSON.stringify(obj))

// console.log(localStorage.getItem("obj", obj));
console.log(JSON.parse(localStorage.getItem("obj", obj)));

//! ONLY STRING

localStorage.clear();
console.clear();


window.addEventListener("storage", (e) =>{
    console.log(e);
    document.querySelector(".count").textContent = localStorage.getItem("counter")

    console.log(e.key); // ключ, який було модифіковано
    console.log(e.oldValue); // старе значення
    console.log(e.newValue); // ннове значення
    console.log(e.url); // url де відбулася подія
})








