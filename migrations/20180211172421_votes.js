
exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', table => {
    table.increments()
    table.integer('picture_id')
      .references('id')
      .inTable('pictures')
      .onDelete('Cascade')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes')
};
