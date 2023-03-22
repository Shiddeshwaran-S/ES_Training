/**********************************************************
 * 
 * Question:  Demonstrate an example that shows that array 
 *            elements can be of different types.
 * 
 *********************************************************/

var arr = [false, true, "two", 3, "four", 5, "six", 7, "eight", 9, "ten"];

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

// add object to array
arr.push(person);

// print array
console.log(arr);