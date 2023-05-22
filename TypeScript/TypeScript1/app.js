"use strict";
// const message: string = 'Hello TS'
// console.log('message: ', message);
// const count: number = 10
// console.log('count: ', count);
// const like: boolean = true
// console.log('like: ', like);
// const anyValue: any = undefined // any можна вставити будь що і цифри і строку і булеве значення
// // функція
// function add(a: number, b: number): number {
//     return a + b
// }
// const result: number = add(1, 5) // виклик функції
// console.log('result: ', result);
// const numbers: number[] = [1, 2, 3, 4, 5]
// console.log('numbers: ', numbers);
// // масиви
// const typeVale: [number, string] = [1, "Good"]
// console.log('typeVale: ', typeVale);
// // обєкт
// const person: {name: string, age: number} = {
//     name: 'Ivan', 
//     age: 27
// }
// // класи
// class Animal {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     sayHello(): void {
//         console.log('Привіт, я ' + this.name + '!')
//     }
// }
// const cat = new Animal('Мурчик')
// cat.sayHello()
// console.clear()
// // інтерфейс
// interface Person {
//     name: string,
//     age: number,
//     email?: string
// }
// const user: Person = {
//     name: 'john',
//     age: 27,
//     email: 'gobs@gmail.com'
// }
// // оператори та цикли
// const x: number = -1
// if (x > 0) {
//     console.log('x додатнє');
// } else if (x < 0) {
//     console.log('x відємне');
// }
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// class Car {
//     private brand: string
//     protected speed: number
//     constructor(brand: string){
//         this.brand = brand,
//         this.speed = 0
//     }
//     acceleretete(amount: number): void{
//         this.speed += amount
//     }
// }
// class SportCar extends Car {
//     constructor(brand: string){
//         super(brand)
//     }
//     acceleretete(amount: number): void {
//         if (amount > 50) {
//             console.log(amount + ' Занадто велике прискорення');
//         } else {
//             super.acceleretete(amount)
//         }
//     }
// }
// const ferrari = new SportCar('Ferrari')
// ferrari.acceleretete(65)
// 1 Задача: 
// Напишіть функцію,яка приймає два числа і повертає їх суму.
function add(a, b) {
    return a + b;
}
const result = add(1, 5); // виклик функції
console.log('result: ', result);
// 2. Задача: 
// Напишіть функцію, яка перевіряє, чи є задане число парним.
function task2(a) {
    return a % 2 === 0;
}
const resultTask2 = task2(5); // виклик функції
console.log('result Task2: ', resultTask2);
// 3. Задача: 
// Напишіть функцію, яка приймає рядок і повертає його довжину.
function task3(a) {
    return a.length;
}
const resultTask3 = task3("Привіт"); // виклик функції
console.log('result Task3: ', resultTask3);
// 4. Задача: 
// Напишіть функцію, яка перетворює рядок на масив окремих символів.
function task4(a) {
    return a.split('');
}
const resultTask4 = task4("Hello"); // виклик функції
console.log('result Task4: ', resultTask4);
// 5. Задача: 
// Напишіть функцію, яка об'єднує два масиви в один.
function task5(a, b) {
    // return a.concat(b)
    return [...a, ...b];
}
const resultTask5 = task5(['2', '3'], ['b', 'v']); // виклик функції
console.log('result Task5: ', resultTask5);
