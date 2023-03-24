/*
    Question: Explain difference b/w callback, promise and async await with example code.

    Answer: 
        
        Callbacks are functions that are passed as arguments to other functions. Which means that a callback function is called inside the function it was passed to. 
    Callbacks are used to make sure that a function is not executed before a task is completed. The callback function is executed after the task has been completed. 
    Callbacks helps in maintaining asynchronous behavior and are used to avoid blocking.

        Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks
    can create callback hell leading to unmanageable code. Promises are a better alternative for handling callbacks. Promises provide an easier way to handle asynchronous
    which requires multiple callbacks.

        Async/Await is another way to write asynchronous code as they are built on promises. Async/Await makes asynchronous code look and behave more like synchronous code.
    By doing this, Async/Await makes asynchronous code easier to read and write.
*/

// Callback
const fs =  require('fs');

fs.readFile(
    'C:\\Users\\shidd\\VS Code\\ES_Training\\Assignment 6\\question-1.md',
    callbackFunction,
);

function callbackFunction(err, data) {
    if (err) {
        console.log('\n\n\n1----------------------------\n\n\n');
        console.log("callback ",err);
        console.log('\n\n\n1----------------------------\n\n\n');
    } else {
        console.log('\n\n\n1----------------------------\n\n\n');
        console.log("callback ",data);
        console.log('\n\n\n1----------------------------\n\n\n');
    }
}

// Promise

const prom = new Promise((resolve, reject) => {
    let data = fs.readFileSync('C:\\Users\\shidd\\VS Code\\ES_Training\\Assignment 6\\question-1.md');

    if(data === null) {
        reject('Error');
    } else {
        resolve(data);
    }
});

prom.then((data) => {
    console.log("custom promise ",data);
}).catch((err) => {
    console.log("custom promise ",err);
});

console.log('\n\n\n2----------------------------\n\n\n');


// Async/Await

async function readData() {
    return await fs.promises.readFile('C:\\Users\\shidd\\VS Code\\ES_Training\\Assignment 6\\question-1.md');
}

readData().then((data) => {
    console.log("async/await ",data);
    console.log('\n\n\n3----------------------------\n\n\n');
}).catch((err) => {
    console.log("async/await ",err);
    console.log('\n\n\n3----------------------------\n\n\n');
});


module.exports = {
    "promise": prom,
    "async/await": readData,
};