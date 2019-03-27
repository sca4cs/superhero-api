
exports.up = function(knex, Promise) {
    return knex.schema.createTable('heroes', function(tbl) {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()

        tbl
          .string('power', 128)
          .notNullable();

        tbl
          .string('universe', 128)
          .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('heroes');
};
