/*******************************************************************
 * 
 * Question: Write a program that takes a date and prints the day on
 *           which the date falls on.
 * 
 ******************************************************************/

var date = new Date(Date.now());

function dateToDay(date){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return ("Today("+date.toLocaleDateString()+") is " + days[date.getDay()]);
}

console.log(dateToDay(date));

module.exports = dateToDay;