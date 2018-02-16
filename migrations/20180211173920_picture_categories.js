
exports.up = function(knex, Promise) {
  return knex.schema.createTable('picture_categories', table => {
    table.increments()
    table.integer('picture_id')
      .references('id')
      .inTable('pictures')
      .onDelete('CASCADE')
      .notNullable()
    table.integer('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('picture_categories')
};
