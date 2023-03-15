"use strict"

const userProfileObj = {
    name: "Michael",
    age: 23,
    "years-active": '2020 - present'
}

console.log('userProfileObject: ', userProfileObj);

const userProfArr = [
    ["name", "Michael"],
    ["are", 23],
    ["years-active", '2020 - present']
]

console.log('userProfArra: ', userProfArr);

const map = new Map()
console.log('map: ', map);


const mapUserDate = new Map(userProfArr)
// отримуємо колекцію по ключу і значенню
console.log('mapUserDate: ', mapUserDate);


//? Method Map
//* get() - отримуємо значення за ключем
console.log(mapUserDate.get("name"));
console.log(mapUserDate.get("city"));// якщо ключ відсутній - undefined


//* set() - зберігає елемент до колекції за ключем та значенням 
const mapGamesDate = new Map()

mapGamesDate
.set("name", "Half-Life")
.set("genre", "Action")
.set("company", "Valve")

console.log('mapGamesDate: ', mapGamesDate);


// 
const mapOtherKey = new Map()

mapOtherKey
.set("job", "developer")
.set()
.set(false, "home")
.set(NaN, "453sdc")
.set(null, null)




//? delete() видаляє елемент по ключу
// mapOtherKey.delete(false)
// mapOtherKey.delete(NaN)
// mapOtherKey.delete(null)
// mapOtherKey.delete(NaN)
// mapOtherKey.delete(undefined)
// mapOtherKey.delete("job")
console.log('mapOtherKey: ', mapOtherKey);





//? has - повертає булеве значення, якщо key існує => true
console.log(mapOtherKey.has(false));



//? size - повертаємо поточну кількість елементів у колекції
console.log(mapOtherKey.size);



//? clear() - видаляє всі елементи в колекції
mapOtherKey.clear() 
console.log(mapOtherKey);



//? entries() повертає ключ і значення (2) ['name', 'Half-Life']0: "name"1: "Half-Life"]
for (let entries of mapGamesDate.entries()){
    console.log(entries);
}


// ключ значення
for(let [key, value] of mapGamesDate){
    console.log(key + " : " + value);
}

//* ключ
for(let key of mapGamesDate.keys()){
    console.log(key);
}

//* значення
for(let value of mapGamesDate.values()){
    console.log(value);
}




//? forEach
mapGamesDate.forEach((key, value, map) => {
    console.log(key + " : " + value);
})



//* spread = map to array
const arrayOfMap = [...mapGamesDate]
console.log('arrayOfMap: ', arrayOfMap);

//! map to array
const arrayOfMap2 = Array.from(mapGamesDate)
console.log('arrayOfMap2: ', arrayOfMap2);


//! map to Object

const mapObj = Object.fromEntries(mapGamesDate.entries())
console.log('mapObj: ', mapObj);


console.clear()

//! Practice

const users = [{name: "John"}, {name: "jack"}, {name: "Brandon"}]
const visits = new Map()


visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 5000 * 60))
    .set(users[2], new Date(new Date().getTime() + 15000 * 60))

function lastVisit(user){
    return visits.get(user)
}


console.log(lastVisit(users[0]));
console.log(lastVisit(users[1]));
console.log(lastVisit(users[2]));







