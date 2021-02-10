/*
Abbreviate a Two Word Name

from codewars: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/
//My solution:

const abbrevName = (name) => {
    const names = name.split(" ");
    let res = [];
    for (let name of names) {
      res.push(name.substring(0, 1).toUpperCase());
    }
    return res.join(".");
  };

/* shorter approach with map: 
const abbrevName = (name) => {
  return name.split(" ").map(name => name[0].toUpperCase()).join(".");
};
*/
