/* 
Difference between years

from codewars: https://www.codewars.com/kata/588f5a38ec641b411200005b/train/javascript'

Write a function that receives two strings as parameter. 
This strings are in the following format of date: YYYY/MM/DD. 
Your job is: Take the years and calculate the difference between them.

Examples:
'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
At this level, you don't need validate months and days to calculate the difference.
*/
//My solution:

const howManyYears = (date1, date2) => {
    let  year1 = Number(date1.substring(0,4))
    let year2 = Number(date2.substring(0,4))
    return year1 > year2 ? year1 - year2 : year2 - year1
   }

howManyYears('1997/10/10', '2015/10/10')//returns: 18