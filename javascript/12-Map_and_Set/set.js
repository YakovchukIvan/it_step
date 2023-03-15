"use strict"

// new Set(iterable) – створює Set, якщо аргументом виступає об’єкт-ітератор, тоді значення копіюються в Set.
// set.add(value) – додає нове значення до Set, повертає Set.
// set.delete(value) – видаляє значення з Set, повертає true, якщо value наявне в множині значень на момент виклику методу, інакше false.
// set.has(value) – повертає true, якщо value присутнє в множині Set, інакше false.
// set.clear() – видаляє всі значення множини Set.
// set.size – повертає кількість елементів в множині.


const newSet = new Set()

newSet
    .add(12)
    .add(22)
    .add(33)
    .add(312)
    .add(312)
    .add(312)
    .add(312)
    .add(312)


console.log('newSet: ', newSet);


const newSet2 = new Set([23,43,654, true, false, NaN, null, {name: "Donna"}])
console.log('newSet2: ', newSet2);



console.log(newSet2.values());

console.log(newSet2.keys());

// ключ значення
console.log(newSet2.entries());
for (let key of newSet2){
    // console.log(key);
    console.log(typeof key);
}


console.clear()

// Practice

const word = [
    "Hare",
    "Krishna",
    "Hare",
    "Rama",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Rama",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    ":-)"
]

function uniqueValue(arr){
    return Array.from(new Set(arr))
}

console.log(uniqueValue(word));


const uniqueArr = word.filter((elem, index) => {
    return word.indexOf(elem) === index;
})

console.log('uniqueArr: ', uniqueArr);






