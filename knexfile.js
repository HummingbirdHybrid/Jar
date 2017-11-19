// Update with your config settings.
require('dotenv').config()
module.exports = {
    test: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL || {
            host: process.env.DB_TEST_HOST,
            user: process.env.DB_TEST_USER,
            password: process.env.DB_TEST_PASS,
            database: process.env.DB_TEST_NAME,
            charset: 'utf8',
        },
        migrations: {
            tableName: process.env.DB_MIGR,
            directory: '.server/db/migrations'
        },
    },
    development: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL || {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            charset: 'utf8',
        },
        migrations: {
            tableName: process.env.DB_MIGR,
            directory: './server/db/migrations',
        },
        pool: {
            min: 0,
            max: 7
        },
    },

};
