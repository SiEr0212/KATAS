/*
Convert string to camel case

from codewars: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

//My solution:

const toCamelCase = (s) => {
  let camelCase = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "-" || s[i] === "_") {
      camelCase += s[i + 1].toUpperCase();
      i++;
    } else {
      camelCase += s[i];
    }
  }
  return camelCase;
};

toCamelCase("the_stealth_warrior");
//returns "theStealthWarrior"
