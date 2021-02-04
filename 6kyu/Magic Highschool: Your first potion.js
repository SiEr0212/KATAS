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