// console.log("arrowFunction");

const showAlert = () =>{
    alert("Hello");
}
// showAlert();

// const showAlertTwo = () => alert("Hello - showAlertTwo");

// showAlertTwo();

// Функція що повертає значення

const showDate = (day, month, year) => {
    if(day && month && year){
        return `Введена дата ${day}.${month}.${year}`;
    }
};

// console.log(showDate("13", "02", "2023"));

let day, month, year;


const inputDate = () => {
    day = +prompt("Введіть день");
    month = +prompt("Введіть місяць");
    year = +prompt("Введіть рік");

    if(
        day > 0 && 
        day <= 31 && 
        month > 0 && 
        month <= 12 && 
        year && 
        typeof year == "number"
    ) {
        return `Введена дата ${day}.${month}.${year}`;
    } else {
        return `Некоректний ввід`;
    }

    
};


console.log(inputDate());











