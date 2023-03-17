/*
    
    Question: Show the use of promisify with example code.

    Promisify is a function that converts a function that takes a callback as its argument into a function that returns a promise.

*/

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('..\\Assignmet 6\\question-1.md').then((data) => {
    console.log("promisify ",data);
}).catch((err) => {
    console.log("promisify ",err);
});