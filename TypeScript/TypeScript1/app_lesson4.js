"use strict";
// void
// function logId(id:string | number):void {
//     console.log(id);
// }
// const a = logId(1)
// function multiply(a:number, b?:number) {
//     if(!b) {
//         // return a * a
//     }
//     // return a * b
// }
// type voidFunc = () => void
// const f1: voidFunc = () => {
// }
// const f2: voidFunc = () => {
//     return true
// }
// const bb = f2()
// const skills = ['DEV', 'DevOps']
// console.log('skills: ', skills);
// const user = {
//     s: ['']
// }
// console.log('user: ', user);
// skills.forEach((skill) => user.s.push(skill))
// console.log('user: ', user);
// console.log('skills: ', skills);
// Unknown
// let input:unknown 
// input = 3
// input = 'test'
// input = true
// const res: string = input
// const res: any = input
// case 1
// function run(i:unknown) {
//     if(typeof i === 'number') {
//         i++
//     } else {
//         i
//     }
// }
// run(input)
// case 2
// async function getData() {
//     try{
//         await fetch('')
//     } catch (error) {
//         // console.log(error.message);
//         if (error instanceof Error) {
//             console.log(error.message);
//         } else {
//             console.log(error);
//         }
//     }
// }
// async function getDataForce() {
//     try {
//         await fetch('')
//     } catch (error) {
//         const e = error as Error
//         console.log(e.message);
//     }
// }
// case 3
// type U1 = unknown | number 
// type I1 = unknown & string
// Never
// case 1 
// function genereateError(message: string): never {
//     throw new Error(message);
// }
// case 2
// function dumError():never {
//     while(true){
//     }
// }
// case 3
// function rec():never {
//     return rec()
// }
// type paymentAction = 'refund' | 'checkout' | 'reject'
// function processAction(action: paymentAction) {
//     switch (action) {
//         case 'refund':
//             console.log('refund');
//             break;
//         case 'checkout':
//             console.log('chekout');
//             break;
//         // case 'reject':
//         //     console.log('reject');
//         //     break;
//         default:
//             const _: never = action // відловлює тут помилку якщо в if немає одного із значення paymentAction 
//             throw new Error('Немає такого action')
//     }
// }
// processAction('refund')
// function isString(x: string | number) : boolean {
//     if (typeof x === 'string') {
//         return true
//     } else if (typeof x === 'number') {
//         return false
//     }
//     // genereateError('test')
// }
// null 
// const n: null = null
// const n1: any = null
// const n2: number = null
// const n3: string = null
// interface IUser {
//     name: string
// }
// function getUser() {
//     if (Math.random() > 0.5) {
//         return 
//     } else {
//         return {
//             name: 'RIKI'
//         } as IUser
//     }
// }
// const user = getUser()
// if (user) {
//     const person = user.name
// }
// перетворення типів
// let a: number = 5
// let b: string = a.toString()
// console.log('b: ', b);
// let c = 'test'
// let d: number = +c
// obj
// interface IUser {
//     name: string,
//     email: string,
//     login: string
// }
// const user = {
//     name: 'Tor',
//     email: 'tor@gmail.com',
//     login: 'Odinson'
// } as IUser
// const user: IUser = {
//     name: 'Tor',
//     email: 'tor@gmail.com',
//     login: 'Odinson'
// }
// const user: IUser = {
//     name: 'Tor',
//     email: 'tor@gmail.com',
//     login: 'Odinson'
// }
// interface IAdmin {
//     name: string,
//     role: number
// }
// const admin: IAdmin = {
//     ...user,
//     role: 1
// } // не рекомендується
// function userToAdmin(user: IUser) : IAdmin {
//     return {
//         name: user.name,
//         role: 1
//     }
// }
// const test24 = userToAdmin(user) 
//type Guard
// case 1
// function logId(id:string | number) {
//     if (isString(id)) {
//         console.log(id); 
//     } else if (typeof id === 'number') {
//         console.log(id);
//     } 
// }
// function isString(x: string | number):x is string {
//     return typeof x === 'string'
// }
// Задача 1: Друк повідомлення на консоль 
// без повернення значення
// Напишіть функцію, яка приймає рядок і друкує 
// його на консоль без повернення значення. 
// Використайте тип void для позначення того, 
// що функція не повертає жодного значення.
function task1(a) {
    console.log(a);
}
const a = 'Консоль';
// Задача 2: Запис даних до файлу без повернення значення
// Припустимо, ви маєте функцію, яка записує дані 
// до файлу на сервері. Функція приймає дані для запису 
// та ім'я файлу, але не повертає жодного значення. 
// Використайте тип void для позначення того, 
// що функція не повертає жодного значення.
function task2(data, name) {
    console.log(data, name);
}
task2('Data123', 'name');
// Задача 3: Перевірка типу перед використанням
// Напишіть функцію, яка приймає параметр типу 
// unknown і перевіряє, чи є він числом.
// Якщо він є числом, то обчислює його квадрат, 
// інакше повертає повідомлення про помилку.
function task3(a) {
    if (typeof a === 'number') {
        const square = a * a;
        console.log(a);
        return square;
    }
    else {
        return 'Помилка: Параметр не є числом';
    }
}
//  task3("і") // помилка
task3(3);
// Задача 4: Перетворення типу unknown в типовану змінну
// Напишіть функцію, яка приймає параметр типу unknown 
// і перетворює його в типовану змінну з використанням 
// перевірки типу. Використайте типові анотації для змінної, 
// яку ви отримали з параметра типу unknown.
function task4() {
}
