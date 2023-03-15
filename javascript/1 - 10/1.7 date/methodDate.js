"use strict";

// console.log(Date.parse("2022-08-11"));
// console.log(Date.parse("1960-08-11"));

let d = new Date();

// console.log(d.getFullYear(), "Рік");
// console.log(d.getMonth(), "Місяць від 0 до 11");
// console.log(d.getDate(), "День в місяці");
// console.log(d.getDay(), "День в тижні");
// console.log(d.getHours(), "Години");
// console.log(d.getMinutes(), "Xвилини");
// console.log(d.getSeconds(), "Секунди");
// console.log(d.getMilliseconds(), "Мілісекунди");


// 01.01.2023

// console.log("Hello".padStart(12));//         Hello
// console.log("Hello".padStart(12).length);//        Hello
// console.log("Hello".padStart(12, "*-"));// *-*-*-*Hello
// console.log("Hello".padEnd(12, "-*"));// Hello-*-*-*-



// function formatDate(d){
//     const day = d.getDate().toString().padStart(2, "0");
//     const month = (d.getMonth() +1).toString().padStart(2, "0");
//     const year = d.getFullYear().toString();
//     const hours = d.getHours().toString().padStart(2, "0");
//     const minutes = d.getMinutes().toString().padStart(2, "0");
//     return `${day}.${month}.${year}, ${hours}:${minutes}`;
// }

// console.log("formatDate(d)", formatDate(d));

// Середа, 15 лютого 2023 року, 20:37


const dayTitle = [
    "Неділя", 
    "Понеділок", 
    "Вівторок", 
    "Середа", 
    "Четвер", 
    "Пятниця", 
    "Субота"
];
const monthTitle = [
    "Січеня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня",
]
// console.log(dayTitle[1]);
// console.log(monthTitle[1]);

function formatUaDate(d){
    const day = d.getDate().toString().padStart(2, "0");
    const dayOfweek = d.getDay();
    const month = d.getMonth();
    const year = d.getFullYear().toString();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${dayTitle[dayOfweek]} ${day} ${monthTitle[month]} ${year} року, ${hours}:${minutes}`;
}

// console.log(formatUaDate(d));


//Методи встановлення дати
d.setFullYear(2025);
d.setMonth(11);
d.setDate(6);
d.setHours(6);
d.setMinutes(33);
d.setMilliseconds(36000000);


console.log(formatUaDate(d));