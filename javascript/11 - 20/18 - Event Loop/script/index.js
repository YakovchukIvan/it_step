"use strict"

// eventBtn.addEventListener("click", ()=> {
//     console.log("Привіт, я event loop і я почув про твою подію");
// })


// setTimeout(()=> {
//     console.log("Timeout");
// }, 5000)

// setTimeout(()=> {
//     console.log("Timeout1");
// }, 2000)

// setTimeout(()=> {
//     console.log("Timeout2");
// }, 2000)


// const eventBtn = document.querySelector(".eventBtn");

// eventBtn.addEventListener("click", ()=> {
//     // while(true){
//         console.log("good");
//     // }
// })


// function one () {
//     throw new error('Error')

// }
// function two () {
//     one()
    
// }
// function three () {
//     two()
    
// }

// three ();

// let i = 0;
// function foo () {
//     console.log("i", i);
//     i++;
//     foo()
// }


// eventBtn.addEventListener("click", ()=> {
//     console.log("good");
//     document.body.style.background = `${getRandomColor()}`;
// })

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// const eventBtn = document.querySelector(".eventBtn");


const input = document.querySelector("input")
const paragrph = document.querySelector("p")

// function showText(event) {
//     if (event.key === 'Enter') {
//         paragrph.textContent = input.value;
//     }
// }
// input.addEventListener('keydown', showText)


input.oninput=function(){
  paragrph.innerText=this.value; 
}

input.addEventListener('mouseout', (event) => {
    event.preventDefault()
    paragrph.style.border = '1px solid red';
})

