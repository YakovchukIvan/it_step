loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const logInEmail = document.getElementById("loginEmail").value
    const logInPassword = document.getElementById("loginPassword").value

    const userData = localStorage.getItem(logInEmail)
    localStorage.setItem('logInEmail', JSON.stringify(logInEmail));
    // console.log('userData: ', userData);

    if (userData) {
        const user = JSON.parse(userData)
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);  
    //    console.log("Такої пошти не існує");
       if (user.password === logInPassword) {
        console.log("Вхід успішний");
        window.location.href = './userProfile.html';
       } else {
        console.log("Не вірний пароль");
       }
    } else {
        console.log("Не вірна пошта");
    }

})



// const goToLoginBtn = document.getElementById("goToLoginBtn");

// goToLoginBtn.addEventListener("click", ShowLogin = () => {
//     loginForm.style.display = "block"
//     registrationForm.style.display = "none"
// })