"use strict"

const arr = [];


 // створює рандомний масив

function returnArray() {
    for (let i = 0; i < 10; i++ ) {
        arr.push(Math.round( Math.random() * 100 )); 
    }
    return arr;
}

const ul = document.createElement("ul");
document.body.appendChild(ul);
const newArr = returnArray();
console.log('newArr: ', newArr);

let result = newArr.map((elem) => {
    console.log(elem);
    return `
    <li>${elem}</li>
    `
}).join('');

userBlockContainer.innerHTML = result;

// userBlockContainer.innerHTML = 



