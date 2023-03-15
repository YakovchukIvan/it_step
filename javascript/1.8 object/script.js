"use strict";

// const user = {
//     name: "Jack",
//     age: 22,
//     gender: "Male"
// }

// console.log('user: ', user.name);


// 1
const person = new Object();
// console.log('person: ', person);


// 2
const person2 = {}

// console.log(person == person2); // false
// Додавання елементів

//*1
person2["name"] = "John"
person2["age"] = 22
person2["gender"] = "Male"
person2["city name"] = "London"

//*2
person2.job = "Front-end developer"
person2.email = "JohnBrown@gmail.com"
person2.address = {
    street: "Biker Street",
    zipcode: "330000"
}

// console.log('person2: ', person2);

//*3
const user = {
    name: "Jack",
    age: 22,
    gender: "Male"
}
const job = "Front-end developer"
const email = "JohnBrown@gmail.com"

user.job = job
user["email"] = email

// console.log('user: ', user);


// Видалення елементів
delete user.job
delete user.email
// console.log('user: ', user);

// Перевірка наявності властивості

const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

// console.log('post: ', post);

if ("title" in post) {
    // console.log('Ключ "title" існує');
} else {
    // console.log('Ключ "title" не існує  !!!');
}


// Перегляд властивостей obj
// console.log("\n\n\n-----------Перегляд властивостей obj------------");
for (let key in post) {
    // console.log('key: ', key);
    // console.log('post: ', post[key]);
    // console.log(`${key} - ${post[key]}`);
}

// console.log(post);


// Деструктуризація обєктів

const {userId, id} = post

console.log(userId, id);
console.log('post', post.userId, post.id);
console.log('post', post.userId === userId, post.id === id);
