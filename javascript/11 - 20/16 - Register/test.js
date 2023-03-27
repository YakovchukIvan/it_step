// class User {
//     constructor(firstName, lastName, date, email, password, confirm_password) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.date = date;
//         this.email = email;
//         this.password = password;
//         this.confirm_password = confirm_password;
//     }

//     register(){
//         console.log(this);
        
//         localStorage.setItem(this.email, JSON.stringify(this));
//         alert("Успішна реєстрація")


//     }

// }


// const registrationForm = document.getElementById('registrationForm');
// const loginForm = document.getElementById('loginForm');


// const item1 = document.querySelector(".item1") // створюємо item1 в JS документі і присвоюємо йому значення тега <div class="item1"></div> з HTML документа
// const item2 = document.querySelector(".item2") // це для того, щоб ми могли працювати з елементом div.item1 з самого HTML документа в документі JS
// const item3 = document.querySelector(".item3")
// const item4 = document.querySelector(".item4")
// const item5 = document.querySelector(".item5")
// const item6 = document.querySelector(".item6")
// const item7 = document.querySelector(".item7")

// const input1 = document.querySelector(".firstName") // створюємо input1 в JS документі і присвоюємо йому значення тега <div class="item1"></div> з HTML документа
// const input2 = document.querySelector(".lastName")
// const input3 = document.querySelector(".date")
// const input4 = document.querySelector(".email")
// const input5 = document.querySelector(".password")
// const input6 = document.querySelector(".confirm_password")


// registrationForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const firstName = document.getElementById('firstName').value
//     const lastName = document.getElementById('lastName').value
//     const date = document.getElementById('date').value
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value
//     const confirm_password = document.getElementById('confirm_password').value

//     const user = new User (firstName, lastName, date, email, password, confirm_password);

//     const validInput1 = document.querySelectorAll("validation1") // створюємо validInput1 в JS документі і присвоюємо йому значення тега <p class="validation1"></p> з HTML документа
//     const validInput2 = document.querySelectorAll("validation2") 
//     const validInput3 = document.querySelectorAll("validation3")
//     const validInput4 = document.querySelectorAll("validation4")
//     const validInput5 = document.querySelectorAll("validation5")
//     const validInput6 = document.querySelectorAll("validation6")
//     const validInput7 = document.querySelectorAll("validation7")

//     if (firstName.length < 1 ||  lastName.length < 1 || date.length < 1 || email.length < 1 || password.length < 6 || confirm_password.length < 6) {
//         console.log("Заповніть всі данні");
//         validInput7.forEach(item => item.remove()); // якщо тег <p> з валідацією вже викликаний, видаляємо його, щоб не було два таких
//         item7.insertAdjacentHTML("beforeend", // створюємо тег <p> з валідацією в HTML документі
//         `<p class="validation7">Потрібно заповнити всі поля</p>`
//         )
//     } else {
//         validInput7.forEach(item => item.remove());
//         user.register()
//     }


//     if (firstName.length < 1) {
//         validInput1.forEach(item => item.remove()); // якщо тег <p> з валідацією вже викликаний, видаляємо його, щоб не було два таких
//         item1.insertAdjacentHTML("beforeend", // створюємо тег <p> з валідацією в HTML документі
//         `<p class="validation1">Введіть імя</p>`
//         )
//         input1.style.border = '2px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
//     } else {
//         if (validInput1.length > 0) { // якщо користувач ввів символ
//             validInput1.forEach(item => item.remove()); // видаляємо тег <p> з валідацією в HTML документі
//             input1.style.border = 'none'; // видаляємо червоний border в inputa
//         } 
//     } 

    
//     if (lastName.length < 1) {
//         validInput2.forEach(item => item.remove());
//         item2.insertAdjacentHTML("beforeend", 
//         `<p class="validation2">Введіть призвище</p>`
//         )
//         input2.style.border = '2px solid red';
//     } else {
//         if (validInput2.length > 0) {
//             validInput2.forEach(item => item.remove());
//             input2.style.border = 'none';
//         } 
//     }


//     if (date.length < 1) {
//         validInput3.forEach(item => item.remove());
//         item3.insertAdjacentHTML("beforeend", 
//         `<p class="validation3">Введіть дату</p>`
//         )
//         input3.style.border = '2px solid red';
//     } else {
//         if (validInput3.length > 0) {
//             validInput3.forEach(item => item.remove());
//             input3.style.border = 'none';
//         } 
//     }


//     if (email.length < 1) {
//         validInput4.forEach(item => item.remove());
//         item4.insertAdjacentHTML("beforeend", 
//         `<p class="validation4">Введіть email</p>`
//         )
//         input4.style.border = '2px solid red';
//     } else {
//         if (validInput4.length > 0) {
//             validInput4.forEach(item => item.remove());
//             input4.style.border = 'none';
//         } 
//     }


//     if (password.length < 6) {
//         validInput5.forEach(item => item.remove());
//         item5.insertAdjacentHTML("beforeend", 
//         `<p class="validation5">Пароль повинен містити не менше 6 символів</p>`
//         )
//         input5.style.border = '2px solid red';
//     } else {
//         if (validInput5.length > 0) {
//             validInput5.forEach(item => item.remove());
//             input5.style.border = 'none';
//         } 
//     }


//     if (confirm_password.length < 6) {
//         validInput6.forEach(item => item.remove());
//         item6.insertAdjacentHTML("beforeend", 
//         `<p class="validation6">Введіть повторно пароль</p>`
//         )
//         input6.style.border = '2px solid red';
//     } else {
//         if (validInput6.length > 0) {
//             validInput6.forEach(item => item.remove());
//             input6.style.border = 'none';
//         } 
//     }

// })


// const registerBtn = document.getElementById("registerBtn")

// registerBtn.addEventListener("click", ShowRegister = () => {
//     loginForm.style.display = "none"
//     registrationForm.style.display = "block"
// })

// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const logInEmail = document.getElementById("loginEmail").value
//     const logInPassword = document.getElementById("loginPassword").value

//     const userData = localStorage.getItem(logInEmail)
//     // console.log('userData: ', userData);

//     if (userData) {
//        const user = JSON.parse(userData)
//     //    console.log("Такої пошти не існує");
//        if (user.password === logInPassword) {
//         console.log("Вхід успішний");
//        } else {
//         console.log("Не вірний пароль");
//        }
//     } else {
//         console.log("Не вірна пошта");
//     }

// })

// const goToLoginBtn = document.getElementById("goToLoginBtn");

// goToLoginBtn.addEventListener("click", ShowLogin = () => {
//     loginForm.style.display = "block"
//     registrationForm.style.display = "none"
// })



localStorage.setItem("data", 5);
console.log(localStorage.getItem("data"));


const a = [3,4,5];
localStorage.setItem("a", JSON.stringify(a));
let b = localStorage.getItem("a");
b = JSON.parse(b);
console.log(b);
console.log(b[0]);




let beta = localStorage.getItem("leas@g.com");
localStorage.setItem("beta", JSON.stringify(beta));
beta = JSON.parse(beta);
console.log(beta);
console.log(beta["firstName"]);
console.log(beta["lastName"]);
console.log(beta["date"]);
console.log(beta["email"]);
console.log(beta["password"]);
