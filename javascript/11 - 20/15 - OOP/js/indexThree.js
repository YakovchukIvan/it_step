
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.hobbies = []
    }

    addHobby(hobby){
        this.hobbies.push(hobby)
        
    }
    getHobbies(){
        // console.log(this.hobbies);
        console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}`)
    }
}

let user = new Person("Jack", "18");

user.addHobby("food");
user.addHobby("game");
user.addHobby("work");
user.getHobbies("Jack", 18)