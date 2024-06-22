/** increments = si no se pone primary() igual lo crea como primary_key */

exports.up = function (knex) {
    return knex.schema
        .createTable("estados", (table) => {
            // validar qe solo se pueden crear hasta 9 estados si se da el caso
            table.increments("id_estado").primary()
            table.string("nombre", 50).notNullable().unique()
            table.timestamps(true, true)
        })
        .createTable("categorias", (table) => {
            table.increments("id_categoria").primary()
            table.string("nombre", 50).notNullable().unique()
            table.string("descripcion", 50).notNullable()
            table
                .integer("id_estado", 1)
                .references("id_estado")
                .inTable("estados")
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            table.timestamps(true, true)
        })
        .createTable("sub_categorias", (table) => {
            table.increments("id_sub_categoria").primary()
            table.string("nombre", 50).notNullable().unique()
            table.string("descripcion", 50).notNullable()
            table.integer("id_categoria").references("id_categoria").inTable("categorias").notNullable().onUpdate("CASCADE").onDelete("CASCADE")
            table.integer("id_estado", 1).references("id_estado").inTable("estados").notNullable().onUpdate("CASCADE").onDelete("CASCADE")
            table.timestamps(true, true)
        })
        .createTable("productos", (table) => {
            table.increments("id_producto").primary()
            table.string("nombre", 50).notNullable().unique()
            table.string("descripcion", 50).notNullable()
            table.integer("id_sub_categoria").references("id_sub_categoria").inTable("sub_categorias").notNullable().onUpdate("CASCADE").onDelete("CASCADE")
            table.integer("id_categoria").references("id_categoria").inTable("categorias").notNullable().onUpdate("CASCADE").onDelete("CASCADE")
            table.integer("id_estado", 1).references("id_estado").inTable("estados").notNullable().onUpdate("CASCADE").onDelete("CASCADE")
            table.timestamps(true, true)
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTable("estados")
        .dropTable("categorias")
        .dropTable("sub_categorias")
        .dropTable("productos")
}
