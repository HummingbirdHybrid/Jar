
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', function(table) {
        table.string('google_id').unique();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('google_id');
    });
};
