"use strict"

// setTimeout(() => {
//   console.log("Req nem 1");
//     setTimeout(() => {
//         console.log("Reg nem 2");
//         setTimeout(() => {
//           console.log("Reg nem 3");
//             setTimeout(() => {
//               console.log("Reg nem 3 + Reg nem 2 + Reg nem 1 / 3");
//             },2000)
//         },2000)
//     },3000)
// },4000)


const promise = new Promise(function(resolve, reject){

  setTimeout(function(){

    console.log("Start process");

    resolve()
    // reject("Bad idea")
  }, 2000)
})

.then(() =>{

  return new Promise((resolve, reject) =>{

    setTimeout(() => {

      const car = {
        brend: "Tesla",
        model: "X"
      }
      console.log("You want to buy: ", car.brend, car.model);
      // reject("Not enough money")
      resolve(car)
    }, 2000)
  })
})

.then((car) =>{

  return new Promise((resolve, reject) =>{

    setTimeout(() => {

      console.log("CTO cheking...");

      // const car = {
      //   brend: "Tesla",
      //   model: "X",
      //   techStatus: "checked"
      // }
      car.techStatus = "checked"

      console.log("Technical status: ", car.techStatus);

      resolve(car)
      // reject("Technical status bad!")
    }, 2000)
  })

})

.then((car) =>{

  return new Promise((resolve, reject) =>{

    setTimeout(() => {

      console.log("Police checking register ...");
      
      // const car = {
      //   brend: "Tesla",
      //   model: "X",
      //   techStatus: "checked",
      //   policeStatus: "cheked"
      // }
      car.policeStatus = "checked"
      console.log("Police status: ", car.policeStatus);

      resolve(car)
      // reject("Police status bad")

    }, 2000)
  })

})


.then((car) =>{

  return new Promise((resolve, reject) =>{

    setTimeout(() => {

      console.log("Car status ...");

      // const car = {
      //   brend: "Tesla",
      //   model: "X",
      //   techStatus: "checked",
      //   policeStatus: "cheked",
      //   status: "bought"
      // }
      car.status = "bought";

      console.log("Car status: ", car.status);
      resolve(car)
      // reject("Oppssss!")

    }, 2000)
  })

})

.then((car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("You bought the car !!!");
      console.log(car);
      resolve()
    }, 2000)
  })
})

.catch((error) => { // .catch приймає значення з reject
  console.error(error)
})

.finally(() => { // в кінці визивається, якщо зайшов в .catch
  console.log("Finish process");
})





