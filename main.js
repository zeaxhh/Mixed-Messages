/* For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you 
know of JavaScript syntax so far to build the program and customize it to your liking. */

const foodGroups = {
  Proteins: ["steak", "chicken", "tofu", "fish"],
  Carbs: ["Jasmine Rice", "Lentils", "Black beans", "Sweet Potatoes"],
  Veggies: ["Brocolli", "Mixed Veggies", "Asparagus", "Green Beans"],
};

let index = Math.floor(Math.random() * 4);

const healthyMeal = (arg) => {
    return `Hello, ${arg}, your meal will be ${foodGroups.Proteins[index]}, with ${foodGroups.Carbs[index]} and ${foodGroups.Veggies[index]}`;
};

console.log(healthyMeal(Zach));