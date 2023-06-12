"use strict";
// generic
// 1 приклад вбудованих джейнериків
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const aOne = [1, 2, 3];
const bOne = ['1', '2', '3'];
function testA() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((resolve, reject) => {
            return (1);
        });
        console.log('a: ', a);
    });
}
const check = {
    drive: true,
    kpp: false
};
// 2. Функція з generics
// function LogMiddlewere(data: number): number{
//     console.log(data);;
//     return data
// }
// const res = LogMiddlewere(33)
// function LogMiddlewere(data: number | string): number | string {
//     console.log(data);;
//     return data
// }
// const res = LogMiddlewere(33)
// function LogMiddlewere<T>(data: T):T {
//     console.log(data);
//     return data
// }
// const res = LogMiddlewere<number>(33)
// const res1 = LogMiddlewere<string>('33')
// function getSplitHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2
//     console.log('l: ', l);
//     return data.splice(0,1)
// }
// getSplitHalf([1,2,3])
// getSplitHalf(['Mazda','String','Fish'])
// getSplitHalf([2,'String',2])
// getSplitHalf<string>(['1','2','String'])
// 3. Практична
// function toString<T>(data: T): string | undefined{
//     if(Array.isArray(data)) {
//         console.log('good');
//         return JSON.stringify(data)
//     }   
//     switch (typeof data) {
//         case 'string':
//             return data
//         case 'bigint':
//         case 'boolean':
//         case 'function':
//         case 'number':
//         case 'symbol':
//             return data.toString()
//         case 'object' :
//             return JSON.stringify(data)
//         default:
//             return undefined
//     }
// } 
// console.log(toString(2));
// console.log(toString(true));
// console.log(toString(['a','b','c']));
// console.log(toString({a: 1}));
// console.log(toString(undefined));
// console.log(toString(null));
// function toStringTest(a:number, b:number) : number {
//     return a + b
// }
// console.log(toString(toStringTest));
// console.log(toString([undefined, null]));
// 4. Використання в типах
// function getSplitHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2
//     console.log('l: ', l);
//     return data.splice(0,1)
// }
// const split: <T>(data: Array<T>) => Array<T> = getSplitHalf
// interface ILogLine<T> {
//     timeStamp: Date,
//     data: T
// }
// type ILogLineType<T> = {
//     timeStamp: Date,
//     data: T
// }
// const LogLine: ILogLineType<{a: number}> = {
//     timeStamp: new Date(),
//     data: {
//         a: 1
//     }
// }
// 5. Обмеження generic
// class Vehicle {
//     run: number
// }
// function kmToMiles<T>(vehicle: T): T {
//     vehicle.run = vehicle.run / 0.62
//     return vehicle
// }
// function kmToMiles<T extends Vehicle>(vehicle: T): T {
//     vehicle.run = vehicle.run / 0.62
//     return vehicle
// }
// class LCV extends Vehicle {
//     capacity: number
// }
// const vehicle = kmToMiles(new Vehicle())
// const vehicle1 = kmToMiles(new Vehicle({a: 1}))
// const vehicle2 = kmToMiles(({run: 1}))
// function logId(id: string | number): string | number {
//     console.log(id);
//     return id
// }
// function logId<T extends string | number | unknown>(id: T): T {
//     console.log(id);
//     return id
// }
// function logId<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y} {
//     console.log(id);
//     console.log(additionalData);
//     return {id, data: additionalData}
// }
// 6. Практика
// const data = [
//     {id: 1, name: 'Ben'},
//     {id: 2, name: 'Den'},
//     {id: 3, name: 'Jon'},
// ]
// interface ID {
//     id: number,
// }
// function sortData<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'):T[] {
//     return data.sort((a, b) => {
//         switch (type) {
//             case 'asc':
//                 return a.id - b.id
//             case 'desc':
//                 return b.id - a.id
//         }
//     })
// }
// console.log("q1", sortData(data, 'desc'));
// console.log('test', sortData(data));
// console.log("q2", sortData(data, 'desc'));
/* !!!!!!!!!!!!!!! */
// Завдання 1: Загальний тип масиву
// Напишіть функцію getLength, яка приймає масив 
// будь-якого типу і повертає його довжину. 
// Використайте дженерік для того, щоб функція 
// могла приймати масив будь-якого типу даних.
function getLength(task1) {
    return task1.length;
}
console.log(getLength([1, 2, 3, 4, '5']));
// Завдання 2: Пошук за ключовим полем
// Напишіть функцію findByKey, яка приймає масив об'єктів 
// і ключове поле, і повертає перший об'єкт з масиву,
// у якого значення цього поля відповідає заданому значенню. 
// Використайте дженерік для того, щоб функція могла 
// працювати з будь-яким типом об'єктів.
// function findByKey<T>(task2: T[], id: number):number {
//     return task2[0].id
// }
// console.log([{name: 'Jon', id: 1}, {name: 'Rok', id: 2}]);
// function findByKey<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T | undefined {
//   return arr.find(obj => obj[key] === value);
// }
// // Приклад використання
// const data = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Bob' }
// ];
// const result = findByKey(data, 'id', 2);
// console.log(result); // { id: 2, name: 'Jane' }
// const result2 = findByKey(data, 'name', 'Bob');
// console.log(result2); // { id: 3, name: 'Bob' }
