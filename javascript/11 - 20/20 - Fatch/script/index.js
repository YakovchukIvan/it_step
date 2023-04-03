"use strict"

const btn = document.querySelector("#loading")

btn.addEventListener("click", Req)


// function Req() {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   fetch(url)
//   .then(response => {
//     console.log("Res", response);
//     btn.setAttribute("disabled", true)
//     return response.json()
//   })
//   .then(data => {
//     console.log("Data", data);
//     const list = document.querySelector(".list")
//     let counter = 0;
//     const elem = data.map(item =>{
//       counter++;
//       localStorage.setItem("User " + counter, item.id + " " + item.name + " " + item.email)

//       return `
//       <li>${item.id} ${item.name} ${item.email}</li>
//       `
//     })
//     list.insertAdjacentHTML("afterbegin", elem.join(" "))
//   })
//   .catch(error => console.error("Error", error)) 
// }

const list = document.querySelector(".list")

async function Req() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url)
    btn.setAttribute("disabled", true)
    const data = await response.json()
      let counter = 0;  
      const elem = data.map(item =>{
        counter++;
        localStorage.setItem("User " + counter, item.id + " " + item.name + " " + item.email)
        return `<li>${item.id} ${item.name} ${item.email}</li>`
      })
      list.insertAdjacentHTML("afterbegin", elem.join(" "))
  } catch (error) {
    console.error("Error", error)
  }
}



