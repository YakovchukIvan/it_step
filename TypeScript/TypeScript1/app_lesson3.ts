// Продвинуті типи


//? union

// const arr = [1, 'test', true]

// function logId(id: string | number) {
//     console.log(id.toLowerCase());
// }

// logId('test')
// logId(1)
// logId(true) // error


// звуження типів

function logId(id: string | number | boolean) {
    // console.log(id.toLowerCase());
    if (typeof id === 'string') {
        console.log(id);   
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}


// string and [string]

function logError(err:string | string[]){
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}


// звуження двох обєктів
function logObject(obj: {a: number} | {b:number}) {
    if ('a' in obj) {
        console.log(obj);
    } else {
        console.log(obj.b);
        
    }
}


// складний варіант

function logIds(a:string | number, b:string | boolean) {
    if (a === b) {
        console.log(a,b);
        
    } else {
        console.log(a, b);
        
    }
}


// literal types

// number

// let num: 1 = 1
// num = 2

let score: 0 | 1 | 2 = 2

score = 1

// string 

// let color: 'red' = 'red'
// color = 'green'

let statuss: 'succes' | 'error' | 'pending' = 'error'
statuss = 'succes'
// statuss = 'sfasas'


// boolean

let isTrue: true = true
// isTrue = false
let flag: true | false = false
flag = true
// flag = 3

const test2 = 'test2'
let test3 = 'test2'


// post, get, delete

// function fetchAuth(url:string, method:string) {
//     fetch(method)
// }

// 1 Варіант   enum

enum ReqType {
    GET = 'get',
    POST = 'post',
    DELETE = 'delete'
}

// function fetchAuth(url:string, method:ReqType) {
//     fetch(method)
// }


// 2 варіант   literal

// function fetchAuth(url:string, method:'post' | 'get' | 'delete') {
//     fetch(method)
// } 

// fetchAuth('s', 'post')
// fetchAuth('s', 'get')


// !!!!!!!

// let method = 'post'
// const method = 'post'
const method = '2'

// fetchAuth('test', method as 'post')


// в поверненні з функції

// function fetchAuth(url:string, method:'post' | 'get' | 'delete'): void {
//     fetch(method)
// } 



// type Aliases

type httpMethod = 'post' | 'get' | 'delete'
type coolString = string

function fetchAuth(url: coolString, method: httpMethod): void {
    fetch(method)
} 

// type з обєктами

// звичайний TypeScript
// const user: {name: string,age: number,skills: string[]} = {
//     name: 'Den',
//     age: 35,
//     skills: ['1', '2']
// }

// з type

type User = {
    name: string,
    age: number,
    skills: string[]
}

// const user: User = {
//     name: 'Den',
//     age: 35,
//     skills: ['1', '2']
// }

// обєднання type

type Role = {
    id: number,
}

type UserWithRole = User & Role{
    
}








