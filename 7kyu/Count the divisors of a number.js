/* 
Count the divisors of a number

Count the number of divisors of a non-negative integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
 */
//my solution:

const getDivisorsCnt = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      n % i === 0 ? sum += 1 : null
    }
    return sum;
  };