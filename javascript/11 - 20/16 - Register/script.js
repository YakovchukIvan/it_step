"use sctrict"

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
//     }

// }

class User {
    constructor(firstName, lastName, date, email, password, confirm_password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
    }

    register(){
        console.log(this);
        
        localStorage.setItem(this.email, JSON.stringify(this));

        alert("Успішна реєстрація")
        window.location.href = './userProfile.html';

    }

}

let tester = "";


const registrationForm = document.getElementById('registrationForm');
const wrapper = document.querySelector(".form-group");

const item1 = document.querySelector(".item1") // створюємо item1 в JS документі і присвоюємо йому значення тега <div class="item1"></div> з HTML документа
const item2 = document.querySelector(".item2") // це для того, щоб ми могли працювати з елементом div.item1 з самого HTML документа в документі JS
const item3 = document.querySelector(".item3")
const item4 = document.querySelector(".item4")
const item5 = document.querySelector(".item5")
const item6 = document.querySelector(".item6")
const item7 = document.querySelector(".item7")

const input1 = document.querySelector(".firstName") // створюємо input1 в JS документі і присвоюємо йому значення тега <div class="item1"></div> з HTML документа
const input2 = document.querySelector(".lastName")
const input3 = document.querySelector(".date")
const input4 = document.querySelector(".email")
const input5 = document.querySelector(".password")
const input6 = document.querySelector(".confirm_password")

const validInput1 = document.querySelector(".validation1") // створюємо validInput1 в JS документі і присвоюємо йому значення тега <p class="validation1"></p> з HTML документа
const validInput2 = document.querySelector(".validation2") 
const validInput3 = document.querySelector(".validation3")
const validInput4 = document.querySelector(".validation4")
const validInput5 = document.querySelector(".validation5")
const validInput6 = document.querySelector(".validation6")
const validInput7 = document.querySelector(".validation7")

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const date = document.getElementById('date').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm_password = document.getElementById('confirm_password').value

    const userRegister = new User (firstName, lastName, date, email, password, confirm_password);

    if (firstName.length < 1 ||  lastName.length < 1 || date.length < 1 || email.length < 1 || password.length < 6) {
        console.log("Заповніть всі данні");
        validInput7.style.display = 'block';
    }  else {
        if (confirm_password === password) {
            validInput7.style.display = 'none';
            userRegister.register();

            const userData = localStorage.getItem(email)

            const user = JSON.parse(userData)
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);


            input1.value = "";
            input2.value = "";
            input3.value = "";
            input4.value = "";
            input5.value = "";
            input6.value = "";
        } else {
            validInput6.style.display = 'block';
            input6.style.border = '1px solid red';
        }

    }

    if (firstName.length < 1) {
        input1.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput1.style.display = 'block';
        console.log("немає 1");
    }

    if (lastName.length < 1) {
        input2.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput2.style.display = 'block';
        console.log("немає 2");
    }

    if (date.length < 1) {
        input3.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput3.style.display = 'block';
        console.log("немає 3");
    }

    if (email.length < 1) {
        input4.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput4.style.display = 'block';
        console.log("немає 4");
    }

    if (password.length <= 5) {
        input5.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput5.style.display = 'block';
        console.log("немає 5");
    }

    if (confirm_password.length <= 5) {
        input6.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput6.style.display = 'block';
        console.log("немає 6");
    }

    input1.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 1
            case input1.value.length > 1:
                console.log("працює");
                input1.style.border = '1px solid #ccc';
                validInput1.style.display = 'none';
            break;
            case input1.value.length < 1:
                validInput1.style.display = 'block';
                input1.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

    input2.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 2
            case input2.value.length > 1:
                console.log("працює");
                input2.style.border = '1px solid #ccc';
                validInput2.style.display = 'none';
            break;
            case input2.value.length < 1:
                validInput2.style.display = 'block';
                input2.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

    input3.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 3
            case input3.value.length > 1:
                console.log("працює");
                input3.style.border = '1px solid #ccc';
                validInput3.style.display = 'none';
            break;
            case input3.value.length < 1:
                validInput3.style.display = 'block';
                input3.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

    input4.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 4
            case input4.value.length > 1:
                console.log("працює");
                input4.style.border = '1px solid #ccc';
                validInput4.style.display = 'none';
            break;
            case input4.value.length < 1:
                validInput4.style.display = 'block';
                input4.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

    input5.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 5
            case input5.value.length >= 6:
                console.log("працює");
                input5.style.border = '1px solid #ccc';
                validInput5.style.display = 'none';
            break;
            case input5.value.length < 1:
                validInput5.style.display = 'block';
                input5.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

    input6.addEventListener('mouseout', (event) => {
        event.preventDefault()
        setTimeout(() => {
        switch (true) {
            // 6
            case input6.value.length === input5.value.length && input6.value.length >= 6:
                console.log("працює");
                input6.style.border = '1px solid #ccc';
                validInput6.style.display = 'none';
            break;
            case input6.value.length < 1:
                validInput6.style.display = 'block';
                input6.style.border = '1px solid red';
            break;
        }
        }, 50);
    })

}) 