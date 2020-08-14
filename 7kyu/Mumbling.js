/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

//My solution

function accum(str) {
  
  const arr = str.toLowerCase().split('');
  const res = [];
  for( let i= 0; i < arr.length; i ++){
    let newChar = arr[i].toUpperCase() + arr[i].repeat(i);
    res.push(newChar)
  }
  return res.join("-")
}

accum("ZpglnRxqenU")

// returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
