/*
L1: Set Alarm

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/
//My solution:

const setAlarm = (employed, vacation) => {
    if (employed === false && vacation === true) return false;
    return employed === vacation ? false : true;
  }

setAlarm(true, true); //returns: false
setAlarm(false, true); //returns: false
setAlarm(true, false); //returns: true
  