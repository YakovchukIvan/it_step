// "use strict";

let $input = document.querySelector('[type="checkbox"]');
// console.log('$input: ', $input);

// Використання лапок
// let str = 'Hello World';
// console.log('str: ', str);
// let str2 = "Hello World";
// console.log('str2: ', str2);
// let str3 = `Hello World ${str2}`;
// console.log('str3: ', str3);


// Табуляція
let autoList = 
`
Список доступних авто:
    - BMW
    - Audi
    - Peugeot
`;
// console.log(autoList);


let autoList2 = "*\tAuto:\n *\tBMW\n *\tAudi\n *\tPeugeot\n";
// console.log(autoList2);


// Довжина рядка
let str4 = "JavaScript";
// console.log('str4: ', str4);
// console.log(str4.length);


// Доступ до конкретного елементу рядка
// console.log(str4[0]);
// console.log(str4[1]);
// console.log(str4[2]);
// console.log(str4[3]);
// console.log(str4[10]); // undefined



let text = "Lorem asfa ksksi kkkii loaeea leasntro";
// console.log(text.length);
// console.log(text[text.length - 1]);// Доступилися до останнього елемента рядка


// Доступ до конкретного елементу рядка charAt
// console.log(str4.charAt(0));
// console.log(str4[10]); // undefined
// console.log(str4.charAt(10)); // отримуємо пустий рядок

// console.log(str4.charAt(10) == str4[10]);// falase
// console.log(Boolean(str4.charAt(10)));// false


// Рядки це незмінний тип данних
// let str5 = "Array";
// str5[0] = "W";
// console.log('str5: ', str5);


// Конкатенація рядків 
let str6 = "I";
let str7 = "Love";
let str8 = "JavaScript";

// console.log(str6 + " " + str7 + " " + str8);
// console.log(`${str6} ${str7} ${str8}`);


// Методи toUpperCase & toLowerCase
let str9 = "JavaScript";
// console.log(str9.toUpperCase());
let str10 = "JAVASCRIPT";
// console.log(str10.toLowerCase());


// indexOf - повертає індекс першого входження
// let str11 = "TYPESCRIPT";
// let indexLetter = str11.indexOf("T");
// console.log('indexLetter: ', indexLetter);
// console.log(str11[indexLetter]);
// console.log(str11.indexOf("world")); // -1 якщо в нас такого немає,або не знайдено


// lastIndexOf - повертає індекс останнього входження
// let str12 = "TYPESCRIPT";
// let lastIndexLetter = str12.lastIndexOf("T");
// console.log('lastIndexLetter: ', lastIndexLetter);
// console.log(str12[lastIndexLetter]);


// let textEx = "Привіт, мене звуть Jack і я не ношу шапку взимку, бо я не хворію";
// let firstIndex = textEx.indexOf("не"); // 10
// console.log('firstIndex: ', firstIndex);
// let lastIndex = textEx.lastIndexOf("не"); // 55
// console.log('lastIndex: ', lastIndex);


// let text4 = "";
// for(let i = firstIndex; i <= textEx.length; i++) {
//     // console.log(textEx[i - 1]);
//     text4 += textEx[i];
// }
// console.log(text4);

// let love = "Любов – це коли хочеш переживати з кимось всі чотири пори року. Коли хочеш бігти з кимось від весняної грози під всипаний квітами бузок, а влітку збирати ягоди та купатися в річці. Восени разом варити варення і заклеювати вікна від холоду. Взимку – допомагати пережити нежить і довгі вечори... (Рей Бредбері)";

// // Варення

// let worldToFind = "Взимку";
// let jam = love.indexOf(worldToFind);
// console.log('jam: ', jam);

// let world = "";
// for (let i = jam; i <= jam + worldToFind.length; i++){
//     world += love[i];
// }
// // console.log(world);


// function findWord(world, text){
//     let index = text.indexOf(world);
//     let findWord = "";
//     for (let i = index; i <= index + world.length; i++){
//     findWord += text[i];
// }

//     return findWord;
// }

// console.log(findWord("заклеювати", love));

let loremText = 
`
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor facilis,
    minima, quae voluptatem mollitia quod, ipsum soluta ducimus natus ratione eaque
    accusantium sunt. Consequuntur magni temporibus saepe debitis eligendi vitae
    sapiente ipsum minus explicabo ad, ipsum provident maiores est natus minima officiis.
    Quod consectetur quos ipsum repellat fugiat qui, illo maxime. Eos, nisi ullam.
`;

let counter = 0;
let wordFind = "ipsum";
let index = loremText.indexOf(wordFind);

while(index != -1) {
    counter++;
    index = loremText.indexOf(wordFind, index+1);
    // другий параметр index+1 не є обовязковим, але внашому випадку є обовязковим
}
// console.log(`Слово ${wordFind} - зустрічається ${counter} разів`);


// Метод includes - використовується, якщо потрібно перевірити чи є збіг, але не потрібна позиція (true & false)
let str13 = "Simole App";
// console.log(str13.includes("App"));
// console.log(str13.includes("app"));


// Методи startsWith & endsWith перевіряють чи починається і закінчується рядок певним підрядком
// console.log("Телефон".startsWith("Тел"));
// console.log("Телефон".endsWith("фон"));


// Отримання підрядка slice()
// let str14 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
// console.log(str14.slice());
// let index1 = str14.indexOf("ipsum");
// console.log(str14.slice(2)); // виведе рядок з вказаної позиції
// console.log(str14.slice(index1, 11)); // виведе рядок з вказаної позиції до кінцевого значення
// console.log(str14.slice(-11)); // беремо значення з кінця


// отримання підрядка substring()
let str15 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
// console.log(str15.substring());
// console.log(str15.substring(5));
// console.log(str15.substring(0, 5));
// console.log(str15.substring(-5)); // не працює з відємними значеннями


// розділяємо рядок split

let js = 
`
As of 2022, JavaScript and ,HTML/CSS, were the most commonly used programming languages among software developers around the world, with more than 65 percent of respondents stating that they used JavaScript and just over 55 percent using HTML/CSS.
`;

// console.log(js.split());
// console.log(js.split(" ")); // отримуємо масив слів розділених пробілом
// console.log(js.split(",")); // отримуємо масив слів розділених комами


// trimStart - видалили пробіли з початку
// trimEnd - видаляє пробіли з кінця 
// trim - видаляє пробіли
let str16 = "   Hello wordl!!!  ";
// console.log(str16.trimStart());
// console.log(str16.trimEnd());
// console.log(str16.trim());

// concat
// concat - повертає новий рядок
let str17 = "Java";
let str18 = "Script";
let javascript = str17.concat(" * ", str18);
console.log('javascript: ', javascript);

console.log(str17.concat(str18));
console.log(str17.concat(" * ", str18));



