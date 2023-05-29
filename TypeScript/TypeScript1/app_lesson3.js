"use strict";
// Продвинуті типи
//? union
// const arr = [1, 'test', true]
// function logId(id: string | number) {
//     console.log(id.toLowerCase());
// }
// logId('test')
// logId(1)
// logId(true) // error
// звуження типів
function logId(id) {
    // console.log(id.toLowerCase());
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// string and [string]
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
// звуження двох обєктів
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj);
    }
    else {
        console.log(obj.b);
    }
}
logObject({ 'b': 1 });
