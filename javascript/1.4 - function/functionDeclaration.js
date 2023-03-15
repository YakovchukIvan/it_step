// console.log("test");

// 1. Оголошення

// function functionName(params*) {
//     function body
//     return...
// }

// 2. Назва функції 
// create
// check
// show 
// get 
// calc 
// is

// 3.
// function showMessage() {
//     console.log("Hello Function");
// }
// showMessage();

function showFiveBlocks(){
    for(let i = 1; i <= 5;i++){
        console.log(i);
        document.body.innerHTML += `<h5 style="padding: 10px;">${i}</h5>`;
    }
}

// showFiveBlocks();

const testDiv = document.querySelector("#test");


function showName(name){
    console.log(name);
    testDiv.innerHTML = `<h2>${name}</h2>`
}

// showName("Jack");
// showName("Ivan");
// showName("Nazar");
// showName("Evgen");
// showName("Ilia");


function showFilm(name, years, stars, genre){
    testDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${years}</p>
    <p>${stars}</p>
    <p>${genre}</p>
   `;
}

// showFilm(
//     "Чорна пантера: Ваканда назавжди", 
//     "2022", 
//     "5", 
//     "Супергеройський екшен фантастика бойовик драма"
// );

// Функція, яка повертає значення
// функція яка вираховує площу квадрата

function areaOfSquare(lentgth){
    return lentgth ** 2;
}

// console.log(areaOfSquare(4));

// let area = areaOfSquare(4);
// console.log('area: ', area);

// testDiv.innerHTML = `
// <h3> Площа квадрата - ${area}</h3>
// `;


// Функція з аргументами по default 
// Функція яка вираховує ціну товару іх врахуванням знижки

// function calcDiscount(price, discount){
//     return price * discount;
// }
function calcDiscount(price, discount = 0.05){
    console.log("discount default", discount);
    return price * discount;
}

// console.log(calcDiscount(1000, 0.05));


function showNumber(number) {
    let count = 0;
    console.log(count + number);
}

// console.log("showNumber: ", showNumber);

// showNumber(123);

// let text;
function showText(){
    text = "Hello";
}
// showText();
// console.log(text);


// Функція із зворотнім викликом


function calcSummNumber(numberOne, numberTwo, more, less){
    let summNumber = numberOne + numberTwo;

    summNumber > 20 ? more() : less();
}
function showMoreMessage(){
    console.log("Більше за 20");
}
function showLessMessage(){
    console.log("Менше за 20");
}

calcSummNumber(2, 3, showMoreMessage, showLessMessage);
