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
// складний варіант
function logIds(a, b) {
    if (a === b) {
        console.log(a, b);
    }
    else {
        console.log(a, b);
    }
}
// literal types
// number
// let num: 1 = 1
// num = 2
let score = 2;
score = 1;
// string 
// let color: 'red' = 'red'
// color = 'green'
let statuss = 'error';
statuss = 'succes';
// statuss = 'sfasas'
// boolean
let isTrue = true;
// isTrue = false
let flag = false;
flag = true;
// flag = 3
const test2 = 'test2';
let test3 = 'test2';
// post, get, delete
// function fetchAuth(url:string, method:string) {
//     fetch(method)
// }
// 1 Варіант   enum
var ReqType;
(function (ReqType) {
    ReqType["GET"] = "get";
    ReqType["POST"] = "post";
    ReqType["DELETE"] = "delete";
})(ReqType || (ReqType = {}));
// function fetchAuth(url:string, method:ReqType) {
//     fetch(method)
// }
// 2 варіант   literal
// function fetchAuth(url:string, method:'post' | 'get' | 'delete') {
//     fetch(method)
// } 
// fetchAuth('s', 'post')
// fetchAuth('s', 'get')
// !!!!!!!
// let method = 'post'
// const method = 'post'
const method = '2';
function fetchAuth(url, method) {
    fetch(method);
}
// type з обєктами
// звичайний TypeScript
// const user: {name: string,age: number,skills: string[]} = {
//     name: 'Den',
//     age: 35,
//     skills: ['1', '2']
// }
// з type
// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }
// const user: User = {
//     name: 'Den',
//     age: 35,
//     skills: ['1', '2']
// }
// обєднання type
// type Role = {
//     id: number,
// }
// type UserWithRole = User & Role 
// const user: UserWithRole = {
//     name: 'Den',
//     age: 40,
//     skills: ['1', '2'],
//     id: 1
// }
// interface 
// interface User {
//     name: string,
//     age: number,
//     skills: string[]
// }
// const user: User = {
//     name: 'Ben',
//     age: 33,
//     skills: ['DEV', 'QA']
// }
// 1 варіант
// interface UserWithRole extends User {
//     roleId: number;
// }
// 2 варіант
// interface Role {
//     roleId: number
// }
// interface UserWithRole extends User, Role {
//     createAt: Date
// }
// const user: UserWithRole = {
//     name: 'Ben',
//     age: 33,
//     skills: ['DEV', 'QA'],
//     roleId: 22,
//     createAt: new Date
// }
// console.log('user: ', user);
// можемо описувати методи
// interface User {
//     name: string,
//     age: number,
//     skills: string[],
//     log: (id: number) => string
// }
// різниця між інтерфейс і тайпами | interface and type
// interface User {
//     name: string
// }
// interface User {
//     age: number
// }
// const person: User = {
//     name: 'Jec',
//     age: 44
// }
// type ID = string | number 
// interface ID2 {
//     ID: string | number
// }
// опціональність in TS
// interface User {
//     login: string,
//     password?: string
// }
// const user : User = {
//     login: 'bob@g.com',
//     password: '1234qwer'
// }
// in function
// function multiply(a:number, b:number | undefined): number {
//     if (!b) {
//         return a * a
//     }
//     return a * b
// }
// fun + obj
// interface UserPro {
//     login: string,
//     password?: {
//         type: 'primary' | 'secondary'
//     }
// }
// function testPass(user: UserPro) {
//     const t = user.password?.type
//     const tt = user.password!.type
// }
// Задача 1: Перетворення значення на рядок або число
// Створіть функцію convertToStringOrNumber, 
// яка приймає аргумент типу
// string | number і повертає рядок, 
// якщо аргумент є типом string, або числове значення, 
// якщо аргумент є типом number.
// function fetchAuth(url:string, method:'post' | 'get' | 'delete') {
//     fetch(method)
// } 
function convertToStringOrNumber(a) {
    if (typeof a === 'string') {
        console.log(a);
        console.log(typeof a);
    }
    else if (typeof a === 'number') {
        console.log(a);
        console.log(typeof a);
    }
}
convertToStringOrNumber('String');
convertToStringOrNumber(22);
function getElementSize(w, h) {
    return { w, h };
}
console.log(getElementSize(20, 40));
// Задача 3: Визначення дня тижня
// Створіть функцію isWeekend, яка приймає аргумент типу
// "Saturday" або "Sunday" і повертає true, 
// якщо день є вихідним, або false, якщо це робочий день.
function isWeekend(a) {
    if (a === 'Saturday') {
        console.log(true);
    }
    else if (a === 'Sunday') {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isWeekend('Saturday');
