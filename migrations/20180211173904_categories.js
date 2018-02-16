
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments()
    table.string('category_type')
      .notNullable()
      .defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
