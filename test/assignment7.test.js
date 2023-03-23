const { suite, discribe, it } = require('mocha');
const { expect } = require('chai');

const question1 = require('../Assignment 7/question1.js');

describe('Assigment 7',function(){
    discribe('Promises',function(){
        it('should return data if file exiists',function(done){
            question1.promise.then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });
    });
    discribe('Async/Await',function(){
        
    });
});
