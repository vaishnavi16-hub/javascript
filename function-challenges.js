// 1. write a function 'whatAIML' that takes an input and returns a string describing its type after conversation. if its Number, return "I'm a number", if it's a string return "I"m a string


// function stringToNumber(input) {
//     let num = Number(input);// this will try to convert input to sa number..
//     if (isNaN(num)) {
//         return "Not a number";
//     } else {
//         return num;
//     }
// }
// console.log(stringToNumber("42"));// 42
// console.log(stringToNumber(45.3));//45.3
// console.log(stringToNumber("vaishnavi"));// Not a number
// console.log(stringToNumber(""))//0


// or ..or
// function stringToNumber(input){
//     let num = Number (input);
//     if (isNaN(num)) {
//         return '$"{input}" is a string, not a number';
//     } else {
//         return num;
//     }
// }
// console.log(stringToNumber("vaishu"));


// 2. write a function flipboolean that takes any input and converts it to its boolean equivalent, then flips it. For ex true becomes false, 0 becomes true etc.


// function flipboolean(input){
//     return !Boolean(input);

// }
// console.log(flipboolean(true));//false
// console.log(flipboolean(true));//false
// console.log(flipboolean(false));//true
// console.log(flipboolean(0));//true... yes , Zero is boolean value in javascript
// console.log(flipboolean(1));//false... no, one is not boolean value in javascript.
// console.log(flipboolean('vaishnavi'));//false

// 3.  write a function isItTruthy that takes an input and returns "is truthy" if the value is truthly in javascript or "it's falsy" if it is falsy



function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

console.log(isItTruthy(true));//  t's truthy!
// console.log(isItfalsy!(false));
console.log(isItTruthy("vaishu"));
