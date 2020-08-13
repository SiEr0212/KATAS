/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

//My Solution:
const count = (string) => {  
  let obj = {};
  for(let e of string)if(!obj[e])obj[e] = 1;
  else obj[e] = obj[e] + 1;
  return obj
}

count("aba") 
// returns { a: 2, b: 1 }
