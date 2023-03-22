/*******************************************************************
 * 
 * Question: Write a program that takes a date and prints the day on
 *           which the date falls on.
 * 
 ******************************************************************/

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date(Date.now());

console.log("Today("+date.toLocaleDateString()+") is " + days[date.getDay()]);