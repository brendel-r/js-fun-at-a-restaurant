function nameMenuItem(name) {
  return `Delicious ${name}`;
}

// make function
// create an object menu item


function createMenuItem(foodItem, itemPrice, foodType) {
  var item = {
    name: foodItem,
    price: itemPrice,
    type: foodType
  }
  return item
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


