/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date : 2023-11-10
*     Program : States Service
*   Path Name : service/states.js
*       Tools : Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* These services request access to data on the server
* Contains the logic of access to the server data.
* If something goes wrong in the logic the exceptions we can
* handle here or in the "controller" layer
*
* Services to access the DAO layer:
* uploadStates: Select states in the database (promise).
* createStates: Create a state in the database (promise) and return.
*   editStates: Edit a state in the database (promise) and return.
* deleteStates: Delete a state in the database (promise) and return.
---------------------------------------------------------**/
const statesDAO = require("../dao/states")

class StatesService {

    uploadStates(list) {
        return statesDAO.uploadStates(list) //promise
    }

    findStates(name) {
        return statesDAO.findStates(name) //promise
    }
    readStates(id_estado) {
        return statesDAO.readStates(id_estado) //promise
    }

    createStates(statesDTO) {
        const name = statesDTO
        return statesDAO.createStates(name) //promise
    }

    editStates(_id, statesDTO) {
        const id = _id
        const name = statesDTO
        return statesDAO.editStates(id, name) //promise
    }

    deleteStates(_id) {
        const id = _id
        return statesDAO.deleteStates(id) //promise
    }
}

module.exports = new StatesService()