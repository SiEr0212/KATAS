/* 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

*/

//My solution:

const queueTime = (customers, n) => {
    let result = Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      result[0] += customers[1];
      console.log(result);
      result.sort((a, b) => a - b);
    }
  };
  
  queueTime([1, 2, 3, 4], 1); //returns 10
  queueTime([2, 2, 3, 3, 4, 4], 9); // returns 2
  queueTime([1, 2, 3, 4, 5], 100); // returns 5
  