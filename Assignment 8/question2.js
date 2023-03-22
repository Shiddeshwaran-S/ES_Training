/********************************************************************
 * 
 *  Question: Show examples of use of splice method to add and remove
 *            elements from array.
 * 
 ********************************************************************/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// delete 3 elements from index 3
arr.splice(3, 3);

// modified array
console.log(arr);

// add 3 elements at index 3
arr.splice(3, 0, 4, 4, 6);

// modified array
console.log(arr);

// replace an element at index 4
arr.splice(4, 1, 5);

// modified array
console.log(arr);