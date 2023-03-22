/*******************************************************************************************
 * 
 *  Question: Demonstrate replace all occurrences of a string within a sentence.
 * 
 ******************************************************************************************/

var sentence = "The quick brown fox jumps over the lazy dog. The dog is lazy and brown.";

// replace all occurrences of "dog" with "cat"
var newSentence = sentence.replace(/dog/g, "cat");

// print new sentence
console.log(newSentence);