exports.up = function (knex) {
  return knex.schema.createTable("prayer_time", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("time").notNullable();
    table.string("iqama");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("prayer_time");
};
