
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pictures', table => {
    table.increments()
    table.string('file_name')
      .notNullable()
      .defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pictures')
};
