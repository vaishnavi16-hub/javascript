
// CREATE A CONSTRUCTOR FUNCTION animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherit from Animal using prototypes.

// The Dog constructor should add a method bark() that returns that 'Woof!'. Demonstrate the prototype chai between Dog and Animal.


//Constructor function for Animal..
function Animal() {

}

//Adding speak method to Animal's prototypes..

Animal.prototype.speak = function () {
    return 'Animal speaking';
};

// Constructor function for Dog..
function Dog() {

}


//Inherit from Animal using prototype chai
Dog.prototype.constructor = Dog;


//Add bark method specific to Dog
Dog.prototype.bark = function () {
    return 'Woof!';
};

//Test the prototype chai
const myDog = new Dog();

console.log(myDog.bark());




