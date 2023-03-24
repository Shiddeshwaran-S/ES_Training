const { suite, discribe, it } = require('mocha');
const { expect } = require('chai');

const question1 = require('../Assignment 7/question1.js');

describe('Assigment 7',function(){

    describe('Promises',function(){
        it('should return data if file exiists',async function(){
            question1['promise'].then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });
    });

    describe('Async/Await',function(){
        it('should return data if file exiists',async function(){
            question1['async/await']().then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });
    });
});
