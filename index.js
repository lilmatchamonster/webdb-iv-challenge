const express = require('express');
const helmet = require('helmet');
// const knex = require('knex');

const helpers = require('./helpers');

// const dbConfig = require('./knexfile');
// const db = knex(dbConfig.development);

const server = express();
const parser = express.json();

server.use(parser, helmet());

server.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await helpers.getDishes();
    res.status(200).json(dishes);
  }
  catch (error) {
    res.status(500).json(error);
  }
})


server.get('/api/dishes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await helpers.getDish(id);

    if(dish){
      res.status(200).json(dish);
    }
    else {
      res.status(404).json({ error: 'Could not find' })
    }
  }
  catch (error) {
    res.status(500).json(error);
  }
})

server.post('/api/dishes', async (req, res) => {
  const body = req.body.name;

  try{
    const newDish = await helpers.addDish(body);
    res.status(200).json(newDish);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

// const newDish = "Pasta";

// helpers.addDish(newDish)
// .then(dish => {
//  console.log('new dish:', dish)
// }).catch(err => {
//  console.log('issue with dish')
// })

server.get('/api/recipes', async (req, res) => {
  try{
    const recipes = await helpers.getRecipes();
    res.status(200).json(recipes);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

// helpers.getRecipes()
// .then(recipe => {
//   console.log('recipe', recipe)
// })
// .catch(error => {
//   console.log(error)
// });

server.get('/api/recipes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await helpers.getShoppingList(id);

    if(recipe.length > 0) { 
      res.status(200).json(recipe);
    }
    else{
      console.log("Sorry recipe does not exist")
    }
  }
  catch (error) {
    res.status(500).json(error);
  }
})

// helpers.getShoppingList(2)
// .then(recipe => {
//   console.log('recipe', recipe)
// })
// .catch(error => {
//   console.log(error)
// });

server.post('/api/dishes/:id/recipes', async (req, res) => {
  const newRecipe = req.body.recipe_name;
  const id = req.params.id;
  console.log(newRecipe, id)

  try {
    const recipe = await helpers.addRecipe(newRecipe, id);
    console.log("here it is: ", recipe) // Only returns the new generated ID and not the new recipe object.
    res.status(201).json(recipe);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

// helpers.addRecipe(2)
// .then(recipe => {
//   console.log('Added Recipe', recipe)
// })
// .catch(error => {
//   console.log(error)
// });

const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`\nListening on port: ${port}\n`));