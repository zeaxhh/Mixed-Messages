//CodeAcademy Portfolio Project

//stores nested arrays neatly inside object properties
const foodGroups = {
  Proteins: ["Steak", "Chicken", "Tofu", "Fish"],
  Carbs: ["Jasmine Rice", "Lentils", "Black beans", "Sweet Potatoes"],
  Veggies: ["Brocolli", "Mixed Veggies", "Asparagus", "Green Beans"],
};

//uses template literal to combine 3 pieces of message into one, with optional 'name' feature.
let healthyMeal = (arg) => {

    //picks a random number between 1-4 to use to index arrays and choose random element
    let index1 = Math.floor(Math.random() * 4);
    let index2 = Math.floor(Math.random() * 4)
    let index3 = Math.floor(Math.random() * 4)

    // replaces name with 'friend' if left blank
    let name = arg;
    if(arg === undefined){
        name = 'friend';
    };

    //returns meal
    return `Hello, ${name}, your meal will be ${foodGroups.Proteins[index1]}, with ${foodGroups.Carbs[index2]} and ${foodGroups.Veggies[index3]}`;
};

console.log(healthyMeal());