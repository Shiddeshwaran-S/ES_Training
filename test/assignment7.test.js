const { suite, describe, it } = require('mocha');
const { expect } = require('chai');

const prom = require('../Assignment 7/question1.js').promise;
const read = require('../Assignment 7/question1.js')['async/await'];

const question2 = require('../Assignment 7/question2.js');
const question3 = require('../Assignment 7/question3.js');

suite('Assigment 7',function(){

    describe('question 1',function(){
        it('pomise - should return data if file exiists',async function(){
            prom.then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });

        it('Async/await - should return data if file exiists',async function(){
            read().then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });
    });

    describe('question 2',function(){
        
        it('should return data if file exiists',async function(){
            question2('\\Assigment 6\\question-1.md').then((data) => {
                expect(data).exist;
            }).catch((err)=>{
                expect(err).not.exist;
            });
        });

    });

    describe('question 3',function(){
        
        it('callback - should return product of sum and 10',async function(){
            question3.addCallback(2,3,(result) => {
                expect(result).to.equal(50);
            });
        });

        it('promise - should return product of sum and 10',async function(){
            question3.addPromise(2,3).then((result) => {
                return question3.multiplyPromise(result,10);
            }).then((result)=>{
                expect(result).to.equal(50);
            }).catch((err) => {
                expect(err).not.exist;
            });
        });

        it('async/await - should return product of sum and 10',async function(){
            question3.addAsync(2,3).then((result) => {
                expect(result).to.equal(50);
            }).catch((err) => {
                expect(err).not.exist;
            });
        });

        it('promisify - should return product of sum and 10',async function(){
            question3.callProm(2,3).then((result) => {
                expect(result).to.equal(50);
            }).catch((err) => {
                expect(err).not.exist;
            });
        });

    });
});
