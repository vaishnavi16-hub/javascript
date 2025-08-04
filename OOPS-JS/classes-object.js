// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

// prent class..
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }
}

const myCar = new Car("Honda", "City");
console.log(myCar.getDetails());
console.log(myCar.startEngine());




class Animal {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    getDetails() {
        return 'name: ${this.name}, gender:${this.gender}';
    }
}

class Dog extends Animal {
    startBark(){
        return "Dog was barking";
    }
}

const myDog = new Dog("moti","chiku");
console.log(myDog.getDetails());
console.log(myDog.startBark());// 