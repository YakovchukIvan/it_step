"use strict"

const user__list = document.querySelector(".user__list");
const item_name = document.querySelector(".list__item-name");
const item_lastName = document.querySelector(".list__item-lastName");
const item_date = document.querySelector(".list__item-date");
const item_email = document.querySelector(".list__item-email");
const item_password = document.querySelector(".list__item-password");
// const wrapper = document.querySelector(".wrapper");
const btn_exit = document.querySelector(".btn_exit");
const btn_deleted = document.querySelector(".btn_deleted");

// let beta = localStorage.getItem("leas@g.com");
// localStorage.setItem("beta", JSON.stringify(beta));
// beta = JSON.parse(beta);
// console.log(beta);

const userOpenProfile = JSON.parse(localStorage.getItem('user'));
console.log(userOpenProfile);
const logInUsers = JSON.parse(localStorage.getItem('logInEmail'));
console.log(logInUsers);
const email = JSON.parse(localStorage.getItem('email'));
console.log(email);


// console.log(beta["firstName"]);
// console.log(beta["lastName"]);
// console.log(beta["date"]);
// console.log(beta["email"]);
// console.log(beta["password"]);

function startUser() {
    user__list.insertAdjacentHTML("beforeend", 
    `
    <li><span>Name :</span> <span>${userOpenProfile["firstName"]}</span></li>
    <li><span>Last name:</span> <span>${userOpenProfile["lastName"]}</span></li>
    <li><span>Date:</span> <span>${userOpenProfile["date"]}</span></li>
    <li><span>Email:</span> <span>${userOpenProfile["email"]}</span></li>
    <li><span>Password:</span> <span>${userOpenProfile["password"]}</span></li>
    `
    )
}
startUser();

wrapper.addEventListener("submit", (event) => {
    event.preventDefault()

    if (btn_exit) {
        localStorage.removeItem("user");
        window.location.href = './userLogin.html';
        console.log("good");
        console.log(user);
    } else {
        console.log("no good");
    }
})

btn_deleted.addEventListener("click", (event) => {
    event.preventDefault()

    if (btn_deleted) {
        localStorage.removeItem(logInUsers);
        localStorage.removeItem(email);
        console.log("good, btn_deleted");
    } else {
        console.log("no good");
    }
})





// .user__contact

// .user__title

// .user__list

// .list__item-name

// .list__item-lastName

// .list__item-date

// .list__item-email

// .list__item-password