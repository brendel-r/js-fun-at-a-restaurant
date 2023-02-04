function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(foodItem, itemPrice, foodType) {
  var menuItem = {
    name: foodItem,
    price: itemPrice,
    type: foodType
  }
  return menuItem
}

function addIngredients(ingredient, array) {
  if (!array.includes(ingredient)) {
  array.push(ingredient)
  }
}

function formatPrice(price) {
 return `$${price}`
}

function decreasePrice(price) {
 return price - (price * .1)
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
return recipe
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}