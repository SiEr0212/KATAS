/*
Dashatize it

from codewars: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

Dashatize it
3158086% of 1,1202,782 of 7,674Dragoris3 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
//My solution:

const dashatize = (num) => {
    if (isNaN(num)) return "NaN";
    let number = num.toString();
    if (number[0] === "-") number = number.split(number[0]).join("");
    let res = "";
    for (let i = 0; i < number.length; i++) {
      parseInt(number[i]) % 2 !== 0 && number[0] !== "-"
        ? (res += "-" + number[i] + "-")
        : (res += number[i]);
    }
    let res2 = res.split("");
    let res3 = [];
    for (let j = 0; j < res2.length; j++) {
      res2[j] == "-" && res2[j + 1] == "-" ? res2[j] : res3.push(res2[j]);
    }
    let res4 = res3.join("");
    if (res4.charAt(0) === "-" && res4.charAt(res4.length - 1) !== "-")
      return res4.substring(1);
    if (res4.charAt(0) === "-" && res4.charAt(res4.length - 1) === "-")
      return res4.substring(1, res4.length - 1);
    if (res4.charAt(res4.length - 1) === "-")
      return res4.substring(0, res4.length - 1);
    return res4;
  };

