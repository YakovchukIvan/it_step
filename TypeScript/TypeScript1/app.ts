const message: string = 'Hello TS'
console.log('message: ', message);
const count: number = 10
console.log('count: ', count);
const like: boolean = true
console.log('like: ', like);

const anyValue: any = undefined // any можна вставити будь що і цифри і строку і булеве значення

function add(a: number, b: number): number {
    return a + b
}

const result: number = add(1, 5)
console.log('result: ', result);

const numbers: number[] = [1, 2, 3, 4, 5]
console.log('numbers: ', numbers);

const typeVale: [number, string] = [1, "Good"]
console.log('typeVale: ', typeVale);

const person: {name: string, age: number} = {
    name: 'Ivan', age: 27
}