/********************************************************************************
 * 
 *  Question: Write a function that takes object as input and prints all keys and
 *            values in a valid JSON format
 * 
 *******************************************************************************/

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

function printObject(obj) {
    console.log(JSON.stringify(obj));
}

printObject(person);