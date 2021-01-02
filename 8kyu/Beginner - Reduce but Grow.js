/*
Beginner - Reduce but Grow

from codewars: https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
//My solution:

const grow = (x) =>{
    return x.reduce((product, n) => product * n, 1)
    }

grow([1, 2, 3])//, 6);
    

