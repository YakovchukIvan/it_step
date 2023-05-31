// void

// function logId(id:string | number):void {
//     console.log(id);
// }
// const a = logId(1)


// function multiply(a:number, b?:number) {
//     if(!b) {
//         // return a * a
//     }
//     // return a * b
// }


// type voidFunc = () => void

// const f1: voidFunc = () => {

// }

// const f2: voidFunc = () => {
//     return true
// }

// const bb = f2()

// const skills = ['DEV', 'DevOps']
// console.log('skills: ', skills);

// const user = {
//     s: ['']
// }
// console.log('user: ', user);

// skills.forEach((skill) => user.s.push(skill))
// console.log('user: ', user);
// console.log('skills: ', skills);



// Unknown
// let input:unknown 

// input = 3
// input = 'test'
// input = true

// const res: string = input
// const res: any = input


// case 1

// function run(i:unknown) {
//     if(typeof i === 'number') {
//         i++
//     } else {
//         i
//     }
// }
// run(input)

// case 2

// async function getData() {
//     try{
//         await fetch('')
//     } catch (error) {
//         // console.log(error.message);
//         if (error instanceof Error) {
//             console.log(error.message);
//         } else {
//             console.log(error);
//         }
//     }
// }

// async function getDataForce() {
//     try {
//         await fetch('')
//     } catch (error) {
//         const e = error as Error
//         console.log(e.message);
//     }
// }


// case 3

// type U1 = unknown | number 
// type I1 = unknown & string



// Never

// case 1 
// function genereateError(message: string): never {
//     throw new Error(message);
// }


// case 2

// function dumError():never {
//     while(true){

//     }
// }

// case 3

// function rec():never {
//     return rec()
// }


type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            console.log('refund');
            break;
        case 'checkout':
            console.log('chekout');
            break;
        case 'reject':
            console.log('reject');
            break;
        default:
            const _: never = action
            throw new Error('Немає такого action')
    }
}

processAction('refund')
