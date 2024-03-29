/*  
Acrostic reader

from codewars: https://www.codewars.com/kata/59b843b58bcb7766660000f6/train/javascript

An acrostic is a text in which the first letter of each line spells out a word. 
It is also a quick and cheap way of writing a poem for somebody, as exemplified below :

Sexy
Agnostic
Maniac

=> SAM

Write a program that reads an acrostic to identify the "hidden" word. 
Specifically, your program will receive a list of words (reprensenting an acrostic) 
and will need to return a string corresponding to the word that is spelled out 
by taking the first letter of each word in the acrostic.
*/

//My solution:

const readOut = (acrostic) => {
  return acrostic.map((c) => c[0]).join("");
};

readOut(["Jolly", "Amazing", "Courteous", "Keen"]); //returns: 'JACK'
