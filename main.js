//CodeAcademy Portfolio Project

//stores nested arrays neatly inside object properties
const foodGroups = {
  Proteins: ["Steak", "Chicken", "Tofu", "Fish"],
  Carbs: ["Jasmine Rice", "Lentils", "Black beans", "Sweet Potatoes"],
  Veggies: ["Brocolli", "Mixed Veggies", "Asparagus", "Green Beans"],
};

//picks a random number between 1-4 to use to index arrays and choose random element
let index = Math.floor(Math.random() * 4);

//uses template literal to combine 3 pieces of message into one, with optional 'name' feature.
let healthyMeal = (arg) => {
    let name = arg;
    if(arg === undefined){
        name = 'friend';
    };
    return `Hello, ${name}, your meal will be ${foodGroups.Proteins[index]}, with ${foodGroups.Carbs[index]} and ${foodGroups.Veggies[index]}`;
};

console.log(healthyMeal());