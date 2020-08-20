/*
Valid Parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

*/

const validParentheses = (parens) => {
  let queue = [];
  for (let el of parens) {
    if (el === "(") {
      queue.push(el);
    } else if (queue.pop() !== "(") {
      return false;
    }
  }
  return queue.length === 0;
};
const string = "()()";

validParentheses("()");
// returns  true

// validParentheses( "())" )  returns false
