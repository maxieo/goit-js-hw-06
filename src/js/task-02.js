const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector (`ul`)


const ingredientsItems = document.createElement (`li`)
ingredientsItems.textContent = (ingredients)
ingredientsItems.classList.add (`item`)
ingredientsList.appendChild (ingredientsItems)
console.log(ingredientsList);



