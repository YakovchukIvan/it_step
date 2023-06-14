// 1 типи і як їх обявляти
// const a = 1
// const b = -10

// const a = 'test'

// const a = true
// const b = false

// const a: number = 1000
// const b = "2000"  
// const c = a + b
// console.log('c: ', typeof c);


// 2. Функція, стрілкова, any

// function getFullName(firstName: string, surName: string):string {
//     if (typeof firstName !== 'string') {
//         throw new Error("!!!!!!!")
//     }
//     return `${firstName} ${surName}`
// }
// getFullName("Ivan", "Yakovchuk")



// 3 класині обєкти

// function getFullName(userEntity:{firstName: string, surName: string}):string {
//     return `${userEntity.firstName} ${userEntity.surName}`
// }

// const user = {
//     firstName: 'john',
//     surName: 'Obama',
//     age: 78,
//     skills: {
//         dev: true,
//         devOps: true
//     }
// }

// getFullName(user)


// 4. масиви

// const skills = ['Dev', 'DevOps'] масив в JS

// const skills: string[] = ['Dev', 'DevOps', 1] конкретний масив з конкретним типом даних

// const skills: any[] = ['Dev', 'DevOps', 1] any дозволяє вставити в змінну любі данні, але це не ок

// const skills: string[] = ['Dev', 'DevOps', 'QA']

// for (const skill of skills) {
//     console.log(skill.toLowerCase());   
// }

// const result = skills
// .filter((s: string) => s !== 'DevOps')
// .map(s => s + '! ')
// .reduce((a,b) => a + b)

// console.log('result: ', result);



// 5. Tuples(кортежі)

// const skills: string[] = [1, 'Dev'] - error

// const skills: [number, string] = [1, 'Dev'] 

// // const id = skills[0]
// // const skillsName = skills[1]
// // const q = skills[2] - error

// skills.push('age')

// console.log('skills: ', skills);

// // const [id, skillsName] = skills - диструкторізація

// const arr:[number, string, ...boolean[]] = [1, 'Dev', true, false, true]



// 6. readonly дозволяє лише читати змінну та не дозволяє змінювати

// let a = 1
// a = 2

// const b = 1
// b = 2

// const skills: readonly [number, string] = [1, 'Dev']

// const skills: readonly string[] = ['Dev']

// const skills[0] - error

// const skills: Array<string> = ['Dev']
// const skills: ReadonlyArray<string> = ['Dev']

// console.log('skills: ', skills);



// 7. enum

// const result = {
//     message: 'Платіж успішний',
//     statusCode: '1'
// }

// 1- успіх
// 2 - в процесі
// 3 - феіл

// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS = '2',
//     FAILED = '3'
// }

// // if (result.statusCode === StatusCode.SUCCESS) {

// // }

// function action(status:StatusCode) {

// }

// action(StatusCode.IN_PROCESS)
// action(1)
// action('p')

// function computer() {
//     return: 3
// }

// enum Roles {
//     ADMIN = 1,
//     USER = ADMIN * 2,
//     DEV = computer()
// }





// Task lesson



// Задача 12: Типи користувачів

// Створіть перерахування (enum) для типів користувачів: 
// Admin, Moderator і User. Напишіть функцію, 
// яка приймає тип користувача і повертає повідомлення 
// з його роллю. Використовуйте перерахування 
// для визначення ролей користувачів.


enum Roles {
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    USER = 'User'
}

function userOne (user :number) {

    if (user === 0) {
        console.log(Roles.ADMIN);
    } else if (user === 1) {
        console.log(Roles.MODERATOR);
    } else if (user === 2) {
        console.log(Roles.USER);
    }

}

// userOne(1) moderator
// userOne(2) user



// Задача 11: Робота з днями тижня

// Створіть перерахування (enum) для днів тижня. 
// Напишіть функцію, яка приймає день тижня 
// і повертає повідомлення з його назвою. 
// Використовуйте перерахування для визначення назв днів тижня.


enum Week {
    понеділок = 'понеділок',
    вівторок = 'вівторок',
    середа = 'середа',
    четвер = 'четвер',
    пятниця = 'пятниця',
    субота = 'субота',
    неділя = 'неділя'
}

function weekDay (day :number) {

    if (day === 1) {
        console.log(Week.понеділок);
    } else if (day === 2) {
        console.log(Week.вівторок);
    } else if (day === 3) {
        console.log(Week.середа);
    } else if (day === 4) {
        console.log(Week.четвер);
    } else if (day === 5) {
        console.log(Week.пятниця);
    } else if (day === 6) {
        console.log(Week.субота);
    } else if (day === 7) {
        console.log(Week.неділя);
    } 

}

weekDay (4)



// Задача 9: Конвертація масиву чисел у масив лише для читання

// Напишіть функцію, яка приймає масив чисел 
// і повертає його копію, але зроблену лише для читання, 
// тобто всі елементи масиву мають тип readonly number[].



const numberReadonly: readonly number[] = [1, 2, 3, 4, 5]

function task9(a : readonly number[]) {
    return a
}

const test = task9(numberReadonly)
console.log('test: ', test);



// Задача 8: Розбивання рядка на Tuple

// Напишіть функцію, яка приймає рядок, 
// який містить ім'я та прізвище, розділені пробілом, 
// і повертає Tuple, який містить окремо ім'я і прізвище.



// function task8(a :string): [string, string]  {
//     let [firstName, lastName] = a.split(' ') 
//     return 
    
// }

// task8("Іван Яковчук")

// const skills: [number, string] = [1, 'Dev'] 

// // const id = skills[0]
// // const skillsName = skills[1]
// // const q = skills[2] - error

// skills.push('age')

// console.log('skills: ', skills);

// // const [id, skillsName] = skills - диструкторізація