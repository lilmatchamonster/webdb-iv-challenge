
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", table => {
    table.increments(); // id field
    table.string("name", 128)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
