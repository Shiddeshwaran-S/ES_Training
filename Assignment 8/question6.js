/********************************************************************
 * 
 *  Question: Print all values of a nested obj
 * 
 *******************************************************************/

var person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "Main Street",
        number: 123,
        zip: 12345,
        country: "USA",
        state: "NY",
    },
    hobbies: ["reading", "cooking", "swimming"],
};


function printObject(obj) {
    var result = '{\n'
    for (var key in obj) {
        if (typeof obj[key] == "object") {
            result += key + ': ' + printObject(obj[key]);
        } else {
            result += key + ': ' + obj[key] + ', \n';
        }
    }   
    result += '}\n';
    return result;
}

console.log(printObject(person));

printObject(person);