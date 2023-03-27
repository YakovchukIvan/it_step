"use strict"

// const frontEnd = "front end 22";
// const age = 1;

// localStorage.setItem('frontEnd', frontEnd);
// localStorage.setItem('age', age);

// console.log('localStorage.getItem -', localStorage.getItem("frontEnd"));
// console.log('localStorage.getItem -', localStorage.getItem("age"));

// localStorage.removeItem("age") чистить вибраний локал сторедж
// localStorage.clear() чистить весь локал сторедж


const obj = {
    frontEnd: "front end 22",
    age: 1
}

// localStorage.setItem("obj", obj)
// console.log(localStorage.getItem("obj", obj));


localStorage.setItem("obj", JSON.stringify(obj));

console.log( localStorage.getItem("obj"));

const objStr = localStorage.getItem("obj")
console.log('objStr: ', objStr);

const cours = JSON.parse(objStr);
console.log('cours: ', cours);





