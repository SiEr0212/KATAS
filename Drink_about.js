/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

*/

// first approach

const peopleWithAgeDrink = (old) => {
  if (old <= 13) return "drink toddy";
  if (old <= 17) return "drink coke";
  if (old <= 20) return "drink beer";
  return "drink whisky";
};

// refractoring with ternary statements

const peopleWithAgeDrink = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";

// oneliner from codewars

const peopleWithAgeDrink = (old) => "drink " + (old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky");

//

peopleWithAgeDrink(22); //should return 'drink whisky'
