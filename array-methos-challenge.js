

// ARRAY FILTERING
// 1. write a function filterNumbers(arr) that returns only numbers from a mixed Array.

//   function filterNumbers(arr) {
//     return arr.filter(item => typeof item === 'number');
//   }

// console.log(filterNumbers([1, 'a' , 3, 4, true, 5]));  //[ 1, 3, 4, 5 ]


// console.log(findMax([2,8,1,10,4]));

// ARRAY REVERSAL
// 2. write a function reverseArray(arr) that reverse the Array.


// function reverseArray(arr) {
//     return arr.slice().reverse();
// }
// console.log(reverseArray([2,3,4])); //[ 4, 3, 2 ]




// FIND MAXIMUM IN AN ARRAY
// 3. Write a function findMax(arr) that returns the larges number in the array.

// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([2,8,1,10,4]));// 10




// 4. REMOVE DUPLICATES FROM AN ARRAY
// write a function removeDuplicates(arr) that returns  a new array with all duplicates removed

function removeDuplicates(arr) {
    return [...newSet(arr)];
}
console.log("no Duplicates:",removeDuplicates([1,3,45,6,7,7]))



// 5. FLATTEN A NESTED ARRAY
// write a function flattenarray(arr)that takes a nested array and returns a single flattened array.

 function flattenArray(arr) {
    return arr.flat(Infinity);
 }
 console.log("Flattened Array:", flattenArray([1,[2,[3,4]],5]));