/*
Valid Phone Number

from codewars: https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false
*/
//My solution:

const validPhoneNumber = (phoneNumber) => {
    let check = 0;
    if (phoneNumber.indexOf("(") == 0 && phoneNumber.indexOf(")") == 4) {
      check += 1;
    }
    if (
      phoneNumber.substring(
        phoneNumber.indexOf("(") + 1,
        phoneNumber.indexOf(")")
      ).length == 3
    ) {
      check += 1;
    }
    if (phoneNumber[5] == " ") check += 1;
    if (phoneNumber[9] == "-") check += 1;
    if (phoneNumber.substring(6, phoneNumber.length).length == 8) check += 1;
  
    return check == 5 ? true : false;
  };

  validPhoneNumber("(123) 456-7890");
  //  =>  returns true