const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

module.exports = {

  getDishes: () => {
    return db('dish');
  },

  getDish: (id) => {
    return db('dish')
      .where({id});
  },

  addDish: (dish) => {
  return db('dish')
    .insert({name: dish});
  },

  getRecipes: () => {
    return db('recipe')
      .innerJoin('dish', 'dish_id', 'dish.id')
      .innerJoin('riconnect', 'recipe.id', 'recipe_id')
      .innerJoin('ingredient', 'ingredient.id', 'ingredient_id')
  },

  getShoppingList: (recipeId) => {
    return db('recipe')
      .innerJoin('dish', 'dish_id', 'dish.id')
      .innerJoin('riconnect', 'recipe.id', 'recipe_id')
      .innerJoin('ingredient', 'ingredient.id', 'ingredient_id')
      .where({recipe_id: recipeId})
  },

  addRecipe: (newRecipe, dishId) => {
    console.log("in helpers: ", newRecipe, dishId)
    return db('recipe')
      .insert({recipe_name: newRecipe, dish_id: dishId})
  },


};