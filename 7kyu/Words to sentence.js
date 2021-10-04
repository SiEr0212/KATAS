/* 
Words to sentence

from codewars: https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/train/javascript

Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"
 */
//My solution:

const wordsToSentence = (words)=> {
    return words.join(" ");
  }
  
wordsToSentence(["hello", "world"])//returns: "hello world"
    