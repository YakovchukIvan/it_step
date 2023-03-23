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
    }

}

const registrationForm = document.getElementById('registrationForm');
const inputAll = document.querySelector(".form-group");


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

    const user = new User (firstName, lastName, date, email, password, confirm_password);

    if (firstName.length < 1 ||  lastName.length < 1 || date.length < 1 || email.length < 1 || password.length < 6 || confirm_password.length < 6) {
        console.log("Заповніть всі данні");
        validInput7.style.display = 'block';
    }  else {
        user.register()
    }

    if (firstName.length < 1) {
        input1.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput1.style.display = 'block';
        console.log("немає значення");
    }

    if (lastName.length < 1) {
        input2.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput2.style.display = 'block';
        console.log("немає значення");
    }

    if (date.length < 1) {
        input3.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput3.style.display = 'block';
        console.log("немає значення");
    }

    if (email.length < 1) {
        input4.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput4.style.display = 'block';
        console.log("немає значення");
    }

    if (password.length < 1) {
        input5.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput5.style.display = 'block';
        console.log("немає значення");
    }

    if (confirm_password.length < 1) {
        input6.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
        validInput6.style.display = 'block';
        console.log("немає значення");
    }


    inputAll.addEventListener('mouseout', (event) => {
    event.preventDefault()

    setTimeout(() => {

    if (input1.value.length > 1) {
        console.log("працює");
        input1.style.border = '1px solid #ccc';
        validInput1.style.display = 'none';
    }  
    if (input2.value.length > 1) {
        console.log("працює");
        input2.style.border = '1px solid #ccc';
        validInput2.style.display = 'none';
    } 

        // switch (true) {
        //     // 1
        //     case input1.value.length > 1:
        //         console.log("працює");
        //         input1.style.border = '1px solid #ccc';
        //         validInput1.style.display = 'none';
        //     break;
        //     case input1.value.length < 1:
        //         validInput1.style.display = 'block';
        //         input1.style.border = '1px solid red';
        //     break;
        //     // 2
        //     case input2.value.length > 1:
        //         console.log("працює");
        //         input2.style.border = '1px solid #ccc';
        //         validInput2.style.display = 'none';
        //     break;
        //     case input2.value.length < 1:
        //         validInput2.style.display = 'block';
        //         input2.style.border = '1px solid red';
        //     break;
        //     // 3
        //     case input3.value.length > 1:
        //         console.log("працює");
        //         input3.style.border = '1px solid #ccc';
        //         validInput3.style.display = 'none';
        //     break;
        //     case input3.value.length < 1:
        //         validInput3.style.display = 'block';
        //         input3.style.border = '1px solid red';
        //     break;
        //     // 4
        //     case input4.value.length > 1:
        //         console.log("працює");
        //         input4.style.border = '1px solid #ccc';
        //         validInput4.style.display = 'none';
        //     break;
        //     case input4.value.length < 1:
        //         validInput4.style.display = 'block';
        //         input4.style.border = '1px solid red';
        //     break;
        //     // 5
        //     case input5.value.length > 1:
        //         console.log("працює");
        //         input5.style.border = '1px solid #ccc';
        //         validInput5.style.display = 'none';
        //     break;
        //     case input5.value.length < 1:
        //         validInput5.style.display = 'block';
        //         input5.style.border = '1px solid red';
        //     break;
        //     // 6
        //     case input6.value.length > 1:
        //         console.log("працює");
        //         input6.style.border = '1px solid #ccc';
        //         validInput6.style.display = 'none';
        //     break;
        //     case input6.value.length < 1:
        //         validInput6.style.display = 'block';
        //         input6.style.border = '1px solid red';
        //     break;
        // }
    }, 200);



})

})

    // if (input1.value.length > 1) {
    //     console.log("працює");
    //     input1.style.border = '1px solid #ccc';
    //     validInput1.style.display = 'none';
    // } else {
    //     console.log("не працює");
    //     validInput1.style.display = 'block';
    //     // input1.style.border = 'none';
    // }  
    // if (input2.value.length > 1) {
    //     console.log("працює");
    //     input2.style.border = '1px solid #ccc';
    //     validInput2.style.display = 'none';
    // } else {
    //     console.log("не працює");
    //     validInput2.style.display = 'block';
    //     // input1.style.border = 'none';
    // }






// registrationForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const firstName = document.getElementById('firstName').value
//     const lastName = document.getElementById('lastName').value
//     const date = document.getElementById('date').value
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value
//     const confirm_password = document.getElementById('confirm_password').value

//     const user = new User (firstName, lastName, date, email, password, confirm_password);

//     const validInput1 = document.querySelectorAll(".validation1") // створюємо validInput1 в JS документі і присвоюємо йому значення тега <p class="validation1"></p> з HTML документа
//     const validInput2 = document.querySelectorAll(".validation2") 
//     const validInput3 = document.querySelectorAll(".validation3")
//     const validInput4 = document.querySelectorAll(".validation4")
//     const validInput5 = document.querySelectorAll(".validation5")
//     const validInput6 = document.querySelectorAll(".validation6")
//     const validInput7 = document.querySelectorAll(".validation7")

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
//         input1.style.border = '1px solid red'; // якщо валідацію не пройшло, створюємо червоний border в inputa
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
//         input2.style.border = '1px solid red';
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
//         input3.style.border = '1px solid red';
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
//         input4.style.border = '1px solid red';
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
//         input5.style.border = '1px solid red';
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
//         input6.style.border = '1px solid red';
//     } else {
//         if (validInput6.length > 0) {
//             validInput6.forEach(item => item.remove());
//             input6.style.border = 'none';
//         } 
//     }


//     if (password.length != confirm_password.length) {
//         validInput5.forEach(item => item.remove());
//         item5.insertAdjacentHTML("beforeend", 
//         `<p class="validation5">Пароль не співпадає</p>`
//         )
//         input5.style.border = '1px solid red';
//         validInput6.forEach(item => item.remove());
//         item6.insertAdjacentHTML("beforeend", 
//         `<p class="validation6">Пароль не співпадає</p>`
//         )
//         input6.style.border = '1px solid red';
//     } else {console.log("good");}


// })
