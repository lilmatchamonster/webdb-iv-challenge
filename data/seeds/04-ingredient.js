
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_name: 'corn flour', quantity: "1 cup"},
        {ingredient_name: 'butter', quantity: "1 gram"},
        {ingredient_name: 'basil', quantity: ".5 cup"}
      ]);
    });
};
