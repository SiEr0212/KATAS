/*
count '9's from 1 to n

from codwars: https://www.codewars.com/kata/55143152820d22cdf00001bb/train/javascript

It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a postive integer.

number9(8) //should return 0
number9(9) //should return 1
number9(10) //should return 1
number9(98) //should return 18
number9(100) //should return 20
*/
//My solution:

const number9Helper = (num) => {
  let pow = Math.floor(Math.log10(num));
  let round = Math.pow(10, pow);
  let times = Math.floor(num / round);
  let rest = Math.abs(num - round * times);
  let res = pow * (round == 10 ? 1 : round / 10) * times;
  if (num.toString()[0] == "9") res += rest;
  if (rest < 9) return res;
  else return res + number9Helper(rest);
};
const number9 = (num) => {
  let res = number9Helper(num);
  res = res + (num.toString().split("9").length - 1);
  return res;
};

number9(565754);
//returns: 275645
