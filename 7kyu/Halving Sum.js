/*  
Halving Sum

from codewars: https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/
//My solution:

const halvingSum = (n) => {
    let res =0;
    while (n>=1){
    res+=n;
    n=Math.floor((n*1)/2);
    }
    return res
}