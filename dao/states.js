/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date : 2021-11-15
*     Program : States DAO
*   Path Name : dao/states.js
*       Tools : Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* It is the data access object interface(DAO) that is used to access
* the database and perform the corresponding data maintenance activities.
*
* Services DAO:
* uploadStates: Select all states.
* createStates: Create a state.
*   editStates: Edit a state.
* deleteStates: Delete a state.
* 
---------------------------------------------------------**/
const db = require("../db/db")

class StatesDAO {
    /** List all states */
    async uploadStates() {
    //the primary key is indicated so that it returns
        try {
            const list = await db("estados")
                .select("*")
                .orderBy("id_estado")
                .returning("*")
            return list
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async readStates(id_estado) {
    //the primary key is indicated so that it returns
        try {
            const list = await db("estados")
                .select("*")
                .where({id_estado: id_estado})
                .returning("id_estado") //retorna como la clave principal
            return list
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async findStates(name) {
    //the primary key is indicated so that it returns
        try {
            const nameFind = await db("estados")
                .select("nombre")
                .where({nombre: name})
                .returning("id_estado") //retorna como la clave principal
            return nameFind //devuelve todo el registro con todos los campos
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async createStates(name) {
        try {
            const [id_estado] = await db("estados")
                .insert({
                    nombre: name
                })
                .returning("id_estado") //retorna como la clave principal
            return id_estado
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async editStates(id, name) {
        try {
            const list = await db("estados")
                .where({id_estado: id})
                .update({
                    nombre: name
                })
                .returning("id_estado") //retorna como la clave principal
            return list
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async deleteStates(id) {
        try {
            const list = await db("estados")
                .where({id_estado: id})
                .del()
                .returning("id_estado") //retorna como la clave principal
            return list
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}

module.exports = new StatesDAO()
