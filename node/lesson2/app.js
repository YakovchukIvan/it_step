// const start = performance.now()

// setTimeout(() => {
//   console.log(performance.now() - start);
//   console.log('1s');
// }, 1000)

// function myFunc(arg1, arg2) {
//   console.log('Всім', arg1, arg2);
// }

// setTimeout(myFunc, 1000, 'Hello', 'Hello2')

// const timerID = setTimeout(() => {
//   console.log('set timeout 5s');
// }, 5000)

// setTimeout(() => {
//   clearTimeout(timerID)
//   console.log('Відміняємо попередній таймаут');
// }, 2000)


// const intervalId = setInterval(() => {
//   console.log(performance.now());
// }, 1000)


// setTimeout(() => {
//   clearInterval(intervalId)
//   console.log('Відміняємо інтервал');
// }, 5000)


// console.log('до');

// setImmediate(() => {
//   console.log('the end');
// })

// console.log('після');


// const timeId = setTimeout(() => {
//   console.log(performance.now());
//   console.log('Good');
// }, 2000)

// timeId.unref()

// setImmediate(() => {
//   timeId.ref()
// })


// const fs = require('fs')

// console.log('init');

// setTimeout(() => {
//   console.log(performance.now(), 'Timer 0');
// }, 0)

// fs.readFile(__filename, () => {
//   console.log('File readad');
// })

// setImmediate(() => {
//   console.log('Immediate');
// })

// setTimeout(() => {
//   for (let i = 0; i < 1000000000; i++) {
    
//   }
//   console.log('for cuclys....');
// })

// Promise.resolve().then(() => {
//   console.log('Promise');
// })

// process.nextTick(() => {
//   console.log('tick inside setTimeout');
// })

// console.log('final');


// function a() {
//   return 1 + 1
// }

// function b() {
//   console.log(a());
// }

// b()



// / ****** /

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question('Enter number one ', (num1) => {
//   rl.question('Enter number two ', (num2)=> {
//     const sum = parseFloat(num1) + parseFloat(num2)
//     console.log(`Sum: ${sum}`, typeof sum);
//     rl.close()
//   })
// })


// 1. Знаходження середнього арифметичного
const readline = require('readline')

const arithmetic = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

arithmetic.question('Enter number one ', (num) => {
  let arr = num.split(',');
  const resMap = arr.map((num) => +num)

  console.log(arr);
  console.log(res);

  arithmetic.close()
})


// 2. Перевірка паролю

// const passwordVerification = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// passwordVerification.question('Enter password : ', (pass) => {
//   passwordVerification.question('Repeat password : ' , (repeatPass)=> {
//     if (pass === repeatPass) {
//       console.log(`Пароль вірний : ${pass}`);
//     } else {
//       console.log('Пароль не вірний');
//     }
//     passwordVerification.close()
//   })
// })

// 3. Знаходження максимального числа

// const maxNum = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// maxNum.question('Enter number : ', (num1) => {
//   maxNum.question('Enter number : ', (num2)=> {
//     const res = 
//   })
//   maxNum.close()
// })



