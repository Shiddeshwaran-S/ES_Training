/****************************************************************************************

    Question: 
        Create two functions add (a,b) and multiply (a,b). Call add, then use the result 
    of add function to calculate product with 10. Using all four ways: callback, promise,
    async-await and convert callback to promise using promisify.


****************************************************************************************/

const util = require('util');

// callback

function addCallback(a, b, callback) {
    multiplyCallback(a + b,callback);
}

function multiplyCallback(a, callback) {
    callback(a * 10);
}

addCallback(2, 3, (result) => {
    console.log("callback ",result);
});

// ======================================================================================
// promise

function addPromise(a, b){
    return new Promise((resolve, reject) => {
        if(a == null || b == null){
            reject('Arguments cannot be null');
        } else {
            resolve(a + b);
        }
    });
}

function multiplyPromise(a,b){
    return new Promise((resolve, reject) => {
        if(a == null || b == null){
            reject('Argument cannot be null');
        } else {
            resolve(a * b);
        }
    });
}

addPromise(2,3).then((result) => {
    return multiplyPromise(result,10);
}).then((data)=>{
    console.log("Promise ",data);
}).catch((err) => {
    console.log("Promise ",err);
});

// ======================================================================================
// async/await

async function addAsync(a,b){
    return await multiplyAsync(a+b);
}

async function multiplyAsync(a){   
    return a * 10;
}

addAsync(10, 20).then((data)=>{
    console.log("async/await ",data);
});

// ======================================================================================
// prmoisfy
const callProm = util.promisify(addCallback);

callProm(5,6).then((data)=>{
    console.log("promisify ",data);
}).catch((err)=>{
    console.log("promisify ",err);
});

// ======================================================================================