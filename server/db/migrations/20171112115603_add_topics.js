
exports.up = function(knex, Promise) {
    return knex.schema.createTable('topics', function(table) {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
        table.string('test');
        table.integer('count');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('topics');
};
