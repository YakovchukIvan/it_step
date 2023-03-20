class Dog  {

    static weight = 10;
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    ShowDogInfo(){

        console.log(` Name: ${this.name}\n Breed: ${this.breed}\n Age: ${this.age}`);
    }

}

let Bob = new Dog("Bob", "Taxa", 3)
let Jack = new Dog("Jack", "Sheperd", 6)
// console.log('Bob: ', Bob);

Bob.ShowDogInfo()
Jack.ShowDogInfo()
console.log(Dog.weight);


class HunterDog extends Dog{

    constructor(name, breed, age, power) {
        super(name, breed, age)
        // this.name = name
        // this.breed = breed
        // this.age = age
        this.power = power
    }

    PlusHealth(hp){
        console.log(`Power: ${this.power}`);
        this.power += hp
        console.log(`Power: ${this.power}`);
    }
    MinusHealth(hp){
        console.log(`Power: ${this.power}`);
        this.power -= hp
        console.log(`Power: ${this.power}`);
    }

    ShowDogInfo(){
        console.log(` Name: ${this.name}\n Breed: ${this.breed}\n Age: ${this.age}\n Power: ${this.power}`);
    }
    
}

let Rex = new HunterDog("Rex", "Bulldog", 4, 100)
// Rex.ShowDogInfo()
// Rex.PlusHealth(5)
// Rex.ShowDogInfo()
// Rex.MinusHealth(10)
// Rex.ShowDogInfo()


class Cat extends Dog {
    constructor(name, breed, age, color) {
        super(name, breed, age, color)
        this.color = color
    }

    ShowCatInfo(){
        super.ShowDogInfo()
        console.log(this.color);
    }

}

let Murchik = new Cat("Murchik", "Bobtail", 2, "black")

Murchik.ShowCatInfo()











