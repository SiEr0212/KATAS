/*
Remove the parentheses

from codewars: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/
//My solution:

const removeParentheses = (s) =>{
    let result = "";
    let count = 0;
    for (let letter of s){
      if (letter == "(") count += 1;
      if (count == 0) result += letter;
      if (letter == ")") count -= 1
    }
    return result
  };

removeParentheses("a(b(c))");
//returns: "a"

