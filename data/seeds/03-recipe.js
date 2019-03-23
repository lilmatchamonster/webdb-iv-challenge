
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'Tex-mex', dish_id: 2},
        {recipe_name: `Granny's`, dish_id: 2},
        {recipe_name: 'Margarita', dish_id: 1},
        {recipe_name: 'Supreme', dish_id: 1}
      ]);
    });
};
