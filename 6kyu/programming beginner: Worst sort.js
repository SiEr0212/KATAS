/*
programming beginner: Worst sort

from codewars: https://www.codewars.com/kata/582539ba4ef190f2e60000b2/train/javascript

When no more interesting kata can be resolved, 
I just choose to create the new kata, to solve their own, to enjoy the process 
--myjinxin2015 said

Description:
John is a programming beginner. He wrote a sort function. 
The purpose of the function is to put the character "J","o","h","n" on the right and the other characters on the left. 
finally, a space will added between left side and right side. For example:

"John say hello"  sorted to " say ell Johnho"
There is John's funtion:

function sortByJohn(str){
  var result=[];                             
  for(var i=0;i<=str.length;i++){          //Traversal string
    var char=String(str[i]);               //Get current char
    if(char=="J") result.push(char);       //If char is
    if(char=="o") result.push(char);       // J o h n       
    if(char=="h") result.push(char);       //Puts char to the right side
    if(char=="n") result.push(char);
    result.unshift(char);                  //Else, puts char to the left side
  }
  return result.join(" ");                 //Join the result with a space and return
}
The result of the function is very strange:

sortByJohn("John say hello") return:

"undefined o l l e h  y a s   n h o J J o h n h o"
Can you help John to correct the result?

Task
Complete function correctResult. Function accept an argument resultOfJohn. 
It's the result of John's function. You need to correct the result and return it.

Some examples:
 resultOfJohn=sortByJohn("John say hello")
 correctResult(resultOfJohn) === " say ell Johnho"

 resultOfJohn=sortByJohn("Anne and John are good friends")
 correctResult(resultOfJohn) === "Ae ad  are gd frieds nnnJohnoon"
*/
//My solution: