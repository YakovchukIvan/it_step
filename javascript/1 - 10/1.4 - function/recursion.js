"use strict";

// function recurce(){
//     recurce();
// }
// recurce();

// return 

function countDown(num){
    // Base case
    if(num == 1) {
        return console.log(num);
    }
    else {
        //Recursive case
        console.log((num));
        return countDown(num -1);
    }
}
// console.log(countDown(10));


let count = 0;
function recurce () {
    if(count == 5) return "done";
    count++;
    console.log(count);
    return recurce ();
}
// recurce ();

// console.log(Math.pow(2, 4));

// function pow(x, y){
//     if(y == 0) return 1;
//     return x * pow(x, y - 1);
// }


function pow(x, y){
    return y === 0 ? 1 : x * pow(x, y -1);
}

// let result = pow(2, 3);
// console.log('result: ', result);

function powFOr (x, y) {
    let result = 1;
    for (let i = 1; i <= y; i++) {
        console.log("i - ", i);
        result *= x;
    }
    return result;
}

console.log(powFOr(5, 3));
