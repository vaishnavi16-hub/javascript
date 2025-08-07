// 1.USING ARRAY METHOS
//  write a function  squareNumbers(arr) using map() and  arrow functions

// const squareNumbers = (arr) => arr.map(num => num * num);
// console.log(squareNumbers([1,2,3,4,])); //[ 1, 4, 9, 16 ]
// console.log(squareNumbers([2,3,4]));// [ 4, 9, 16 ]


// 2.CUSTOM FILTER FUNCTION

// const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
// console.log(filterEvenNumbers([1,2,3,4,5,6])); //[2, 4, 6]




// 3. SUM OF POSITIVE NUMBER
 
//  const sumPositiveNumbers = (arr) =>
//   arr
//     .filter(num => num > 0)                // keep only positive numbers
//     .reduce((sum, num) => sum + num, 0);   // sum them starting from 0

//     console.log(sumPositiveNumbers([1, -2,3, -1, 4]));//8

// 4.TRANSFER ARRY OF OBJECT

//  const people = [
//     { name: "vaishnavi", age:22},
//     { name: "seeta", age:21},
//  ]

//  const getNames = (arr => arr.map(obj => obj.name));
//  console.log(getNames(people));// [ 'vaishnavi', 'seeta' ]

// 5.FINS THE LONGEST WORD

// const words =["cat" ,"elephant","tiger"];
// const findLongestWord = (arr) =>
//     arr.reduce((longest, current)=>
     
//         current.length > longest.length ? current : longest
//     );
//     console.log(findLongestWord(words));// 

