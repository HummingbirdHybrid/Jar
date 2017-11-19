
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
        table.string('email').unique().notNull();
        table.string('password').notNull();
        table.string('name');
        table.string('gender');
        table.string('location');
        table.string('website');
        table.string('picture');
        table.string('reset-password-token');
        table.date('reset-password-expires');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
