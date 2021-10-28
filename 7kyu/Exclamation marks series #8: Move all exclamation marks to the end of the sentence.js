/*  
Exclamation marks series #8: Move all exclamation marks to the end of the sentence

from codewars: https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript

Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/
//My solution:

const remove = (s) => {
    let arr = s.split("");
    let chars = [];
    let exclamationMarks = [chars];
    arr.map((c) => (c === "!" ? exclamationMarks.push(c) : chars.push(c)));
    return exclamationMarks.flat().join("");
  };
  
remove("Hi! Hi! Hi!") //returns: "Hi Hi Hi!!!"
