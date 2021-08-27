/* 
Is it a Palindrome?

Write function that checks if a given string (case insensitive) is a palindrome 
(a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.).
*/

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split("").reverse().join("")

isPalindrome("Bob")