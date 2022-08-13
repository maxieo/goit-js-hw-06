const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItem = document.querySelector (`ul`)

const makeIngredientsList = ingredient => {
  const ingridientList = document.createElement ('li')
  ingridientList.classList.add (`item`)
  ingridientList.textContent = ingredient
  return ingridientList
}
const el = ingredients.map (makeIngredientsList)
ingredientsItem.append (...el)





// const ingredientsItems = document.createElement (`li`)
// ingredientsItems.textContent = (ingredients)
// ingredientsItems.classList.add (`item`)
// ingredientsList.appendChild (ingredientsItems)
// console.log(ingredientsList);



