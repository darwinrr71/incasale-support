/** se crea los prametros de conecion para la base de datos */

module.exports = {

    development: {
        client: "postgresql",
        version: "13.4",
        connection: {
            host : "XXX.XXX.X.XX",
            port : 5432,
            database: "incasale",
            schema: "incasale",
            user:     "XXXXXXXX",
            password: "XXXXXXXXXX",
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
