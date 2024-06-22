/** se crea los prametros de conecion para la base de datos */

module.exports = {

    development: {
        client: "postgresql",
        version: "13.4",
        connection: {
            host : "192.168.1.79",
            port : 5432,
            database: "incasale",
            schema: "incasale",
            user:     "darwinrr",
            password: "darwinrr71",
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory:__dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        },
    }
}
