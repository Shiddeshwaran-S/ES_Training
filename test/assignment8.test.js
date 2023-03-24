const { suite, describe, it } = require('mocha');
const { expect } = require('chai');

const dateToDay = require('../Assignment 8/question1.js');
const printObject = require('../Assignment 8/question6.js');

suite('Assigment 8',function(){

    describe('question 1',function(){
        it('should return the day of the date',async function(){
            expect(dateToDay(new Date('03/24/2023'))).to.equal("Today(3/24/2023) is Friday");
        });
    });

    describe('question 2',function(){
        it('should return string from the object',async function(){
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
            expect(printObject(person)).to.equal(printObject(person));
        });
    });
});