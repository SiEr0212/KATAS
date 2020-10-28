/*
Reverser

from codewars: https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.
*/

const reverse = (n) => {
    for (var r = 0; n; n = Math.floor(n / 10)) {
      r *= 10;
      r += n % 10;
    }
    return r;
  };

reverse(1234); 
