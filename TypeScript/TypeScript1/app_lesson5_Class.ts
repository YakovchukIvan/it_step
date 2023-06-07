// 1 створення класів

// class User {
//     name: string

//     constructor(name: string) {
//         this.name = name
//     }
// }

// const user = new User('Roman')
// console.log(user);
// user.name = 'Ben';
// console.log('user: ', user);

// class Admin {
//     role: number
// }

// const admin = new Admin()

// admin.role = 1;


// 2 Конструктор

// class User {
//     name: string
//     age: number

//     constructor()
//     constructor(name: string)
//     constructor(age: number)
//     constructor(name: string, age: number)
//     constructor(AgeOrName?: string | number) {
//         if (typeof AgeOrName === 'string') {
//             this.name = AgeOrName
//         } else if (typeof AgeOrName === 'number') {
//             this.age = AgeOrName
//         }
//     }
// }

// const user = new User ('user')
// console.log('user: ', user);

// const user3 = new User('user', )



// 3 методи класу

// enum PaymentStatus {
//     Holded,
//     Processed,
//     Rebersed
// }

// class  Payment {
//     id: number
//     statuss: PaymentStatus
//     createdAt: Date
//     updateAt: Date

//     constructor (id: number) {
//         this.id = id
//         this.createdAt = new Date()
//         this.statuss = PaymentStatus.Holded
//     }

//     getPaymentLifeTime():number {
//         return new Date().getTime() - this.createdAt.getDate()
//     }
//     unholdPayment(): void {
//         if (this.statuss === PaymentStatus.Processed) {
//             throw new Error('Платіж не може бути повернений')
//         }
//         this.statuss = PaymentStatus.Processed
//         this.updateAt = new Date()
//     }


// }

// const payment = new Payment(1)
// const payment2 = payment.unholdPayment()
// const time =  payment.getPaymentLifeTime()


// console.log('payment: ', payment);
// console.log('time: ', time);
// console.log('payment2: ', payment2);


// 4 перезагрузка методів

// class User {
//     skills: string[]

//     addSkill(skill: string): void
//     addSkill(skill: string[]): void
//     addSkill(skillOrSkills: string | string[]): void {
//         if(typeof skillOrSkills === 'string') {
//             this.skills.push(skillOrSkills)
//         } else {
//             this.skills.concat(skillOrSkills)
//         }
//     }
// }

// new User().addSkill('QA')



// 5 гетери і сетери

// class User {
//     _login: string // перед логін нижнє підчеркування "_" це не гласне правило 
//     password: string

//     set login(test) {
//         this._login = 'user-' + test
//     }
//     get login(){
//         return 'no_login'
//     }
// }

// const user = new User()
// user.login = 'tom-@@@@'

// console.log(user);
// console.log(user.login);



// 6 Наслідування в класах

// type PaymentStatus = 'new' | 'paid'

// class Payment {
//     id: number
//     statuss: PaymentStatus = 'new'

//     constructor(id:number) {
//         this.id = id
//     }

//     pay(): void {
//         this.statuss = 'paid'
//     }
// }

// class PersistedPayment extends Payment {
//     databaseId: number 
//     paidAt: Date

//     constructor() {
//         const id = Math.random()
//         super (id)
//     }

//     save() {

//     }

//     override pay(date?: Date): void {
//         this.statuss = 'paid'
//         super.pay
//         if(date) {
//             this.paidAt
//         }
//     }


// }

// new PersistedPayment().pay()

// 7 видимість

// class Vehicle {
//     public make: string
//     private damages: string[]
//     private _model: string
//     protected run: number
    
//     public set model(m : string){
//         this._model = m;
//     }

//     public get model(): string {
//         return this._model
//     }

//     addDamage(damage: string): void{
//         this.damages.push(damage)
//     }

// }

// new Vehicle().make = 'Fregrant'
// // new Vehicle().
// new Vehicle().addDamage('Вмятина')
// new Vehicle().model

// class EuroTruck extends Vehicle {
//     setDamage(){

//     }

//     setRun(km: number) {
//         this.run = km / 0.62
//     }
// }

// const test4 = new EuroTruck().setRun(12)
// console.log('test4: ', test4);



// 7 статичні поля


// class UserService {
//     static db: any

//     static getUser(id: number) {
//         // return this.db.findById(id)
//         return UserService.db
//     }

// }

// const show = UserService.getUser(67)
// console.log('show: ', show);

// const inst = new UserService()



// / ******************** /


// Задача 1: Керування банківським рахунком

// Уявіть, що ви розробляєте програму для керування 
// банківськими рахунками. Напишіть клас BankAccount, 
// який містить приватне поле balance для збереження 
// балансу рахунку. Додайте гетер та сетер для доступу 
// до цього поля. Клас повинен також мати методи 
// deposit(amount: number) та withdraw(amount: number), 
// які дозволяють поповнювати рахунок та знімати гроші відповідно.

class BankAccount {
    private _balance: number

    constructor () {
        this.balance = 0
    }

    set balance(summ: number) {
        this._balance = summ
    }
    get balance(): number {
        return this._balance
    }

    deposit(balance: number) : void {
        this._balance += balance
        console.log(this._balance += balance);
    }

    withdraw(balance: number) : void {
        if(this._balance < balance) {
            console.log('Error');
        } else {
            this._balance -= balance
            console.log(this._balance -= balance);
        }
    }

}

const userBank = new BankAccount()
userBank.balance = 10; // баланс нашого юзера
console.log('userBank.balance: ', userBank.balance);
// userBank.deposit(30)
console.log('userBank.deposit: ', userBank.deposit(30));
// userBank.withdraw(45)
console.log('userBank.withdraw: ', userBank.withdraw(45));
// userBank.withdraw(30)
console.log('userBank.withdraw: ', userBank.withdraw(30));



// enum PaymentStatus {
//     Holded,
//     Processed,
//     Rebersed
// }

// class  Payment {
//     id: number
//     statuss: PaymentStatus
//     createdAt: Date
//     updateAt: Date

//     constructor (id: number) {
//         this.id = id
//         this.createdAt = new Date()
//         this.statuss = PaymentStatus.Holded
//     }

//     getPaymentLifeTime():number {
//         return new Date().getTime() - this.createdAt.getDate()
//     }
//     unholdPayment(): void {
//         if (this.statuss === PaymentStatus.Processed) {
//             throw new Error('Платіж не може бути повернений')
//         }
//         this.statuss = PaymentStatus.Processed
//         this.updateAt = new Date()
//     }


// }

// const payment = new Payment(1)
// const payment2 = payment.unholdPayment()
// const time =  payment.getPaymentLifeTime()


