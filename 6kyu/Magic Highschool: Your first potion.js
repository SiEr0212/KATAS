/*
Magic Highschool: Your first potion

from codewars: https://www.codewars.com/kata/5b6f3284b3d9774bff000026/train/javascript

You just entered the Magic Highschool, and it you are sitting in your first potion class. The potion teacher looks at the class and enunciates one simple task: brew a potion. But here's the twist: you have no idea what the recipes is, and your only ressources are your grimoire (which you haven't opened yet). Fortunately, your book seems to have enough information to make simple potions, which you can then combine to make the required one. As you stood up to gather your stuff, you realize that you first have to know which ingredients and how much of them you'll need before being able to brew anything!

Here's your task: code an algorithm, which, given a set of recipes, should return the different ingredients you will need to brew your potion, alongside their respective quantities.

You'll have to code a function, getIngredients(recipes, final, amount):

recipes is your grimoire: an array of recipes, each recipe looking like: {"ingredients": [[name, quantity]], "result": name}
final: the name of the final compound/potion to get
The function should output an object, whose keys are the ingredient name and their values their quantity
If your grimoire doesn't include any recipe for the final compound, you should return null
*/
//My solution:


var recipes = [
  {
    ingredients: [
      ["troll nail", 2],
      ["dewdrop", 4],
    ],
    result: "foot-smelling potion",
  },
  {
    ingredients: [
      ["foot-smelling potion", 3],
      ["siren teardrop", 1],
    ],
    result: "invisibility potion",
  },
  {
    ingredients: [
      ["reindeer hair", 2],
      ["pine essence", 1],
      ["moonshine essence", 2],
    ],
    result: "winterheat potion",
  },
  {
    ingredients: [
      ["pine resin", 3],
      ["pure alcohol", 2],
    ],
    result: "pine essence",
  },
];


const getIngredients = (recipes, final) => {
  let check = [];
  for (let recipe of recipes) {
    if (recipe.result === final) {
      check = recipe.ingredients;
    }
  }

  for (let potion of recipes) {
    for (let ingredient of check) {
      if (ingredient[0] === potion.result) {
        for (let amount of potion.ingredients) {
          let multiplicator = amount[1] * ingredient[1];
          amount.splice(1, 1, multiplicator);
        }
        check.splice(0, 1, potion.ingredients);
      }
    }
  }

  return check.flat(1);
};

getIngredients(recipes, "invisibility potion"); 

//=>returns: {"dewdrop": 12, "troll nail": 6, "siren teardrop": 1},
