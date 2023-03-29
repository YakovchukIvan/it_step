// const promise = new Promise(function(resolve, reject){

//   setTimeout(function(){

//     console.log("Ми готові почати");

//     resolve()
//     // reject("Не працює")
//   }, 2000)
// })

// .then(() =>{

//   return new Promise((resolve, reject) =>{

//     setTimeout(() => {

//       console.log("Все ідеально працює");
//       // reject("Воно чомусь не працює")
//       resolve()

//     }, 2000)
//   })
// })

// .catch((error) => { // .catch приймає значення з reject
//   console.error(error)
// })

// .finally(() => { // в кінці визивається, якщо зайшов в .catch
//   console.log("Finish process");
// })

// function showTask1(auto) {
//     console.log(auto);
// }

// showTask1(promise)

// function createPromise(value){
//     return new Promise((resolve, reject) => {
//         resolve(value);
//     })
// }
// createPromise("Hello")
// .then((value) => {
//     console.log(value);
// })






