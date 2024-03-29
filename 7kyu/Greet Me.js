/*  
Greet Me

from codewars: https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
//My solution:

const greet = (name) => {
  return (
    "Hello " +
    name.substring(0, 1).toUpperCase() +
    name.substring(1, name.length).toLowerCase() +
    "!"
  );
};

greet("riley"); //returns: 'Hello Riley!'
