/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date : 2021-11-01
*     Program : States Controller
*   Path Name : controller/states.js
*       Tools : Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* This layer is responsible for directing the body to the 
* different services that will be executed on the server 
* and then be rendered to the browser, in addition to showing
* exceptions (err) that can occur on the server.
*
* Err: HTTP Status Codes
* 200: GET  OK
* 404: GET Not Found
* 201: POST Created
* 500: PUT Internal Server Error
---------------------------------------------------------**/
const statesService = require("../service/states")
var prueba = {}

class StatesController {
    /** uploadStates: retrieves all rows from the states table */
    async uploadStates(req, res) {
        try {
            //run a json file when you want to track in Thunder Client
            //res.status(201).json(list);
            const list = await statesService.uploadStates(req.body)
            res.status(200) // Status 'Ok'
            res.render("states/states", { title: "State list", data: list })
        } catch (err) {
            console.error(err)
        }
    }

    /** uploadFormNew: load a blank form to create a new state */
    async uploadFormNew(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("states/new-state", { title: "New state", msg_error: "" })
        } catch (err) {
            console.error(err)
        }
    }

    /** uploadFormEdit: retrieves a record from the table so that it can be edited */
    async uploadFormEdit(req, res) {
        try {
            const id_estado = req.params.id_estado
            let onlyNumbers = prueba.onlyNumbers(id_estado)
            let readState = ""
            /** regex.exec : If it finds a match, it returns a result array, otherwise it returns null. */
            if (onlyNumbers) {
                readState = await statesService.readStates(id_estado)
                if (readState.length === 0){
                    throw "Sorry, status code not found"
                }
            }else {
                throw "Sorry, invalid status code"
            }

            res.status(200) // Status 'Ok'
            res.render("states/edit-state", { title: "Edit state", dataState: readState, error: false,  msg_error: ""  })
        } catch (err) {
            res.status(404) // Status 'Not Found'
            res.render("states/edit-state", { title: "", error: true, msg_error: err  })
        }
    }

    /** uploadFormDelete: retrieves a record from the table so that it can be deleted */
    async uploadFormDelete(req, res) {
        try {
            const id_estado = req.params.id_estado
            let onlyNumbers = prueba.onlyNumbers(id_estado)
            let readState = []
            /** regex.exec : If it finds a match, it returns a result array, otherwise it returns null. */
            if (onlyNumbers) {
                readState = await statesService.readStates(id_estado)
                if (readState.length === 0){
                    throw "Sorry, status code not found"
                }
            }else {
                throw "Sorry, invalid status code"
            }
            res.status(200) // Status 'Ok'
            res.render("states/delete-state", { title: "Delete state", dataState: readState, error: false,  msg_error: ""  })
        } catch (err) {
            res.status(404) // Status 'Not Found'
            res.render("states/delete-state", { title: "", error: true, msg_error: err  })
        }
    }

    /** createStates: create a record in the states table */
    async createStates(req, res) {
        try {
            const name = req.body.nombre.trim()
            const descripName = await statesService.findStates(name)
            if (descripName.length > 0){
                const nameDB = descripName[0].nombre
                if( name === nameDB || nameDB.length === 0){
                    throw "Text is blank or description already exists"
                }
            }
            await statesService.createStates(name)
            const list = await statesService.uploadStates(req.body)
            res.status(201) // Status 'Created'
            res.render("states/states", { title: "State list", data: list })
        } catch (err) {
            res.status(200) // Status 'Ok'
            res.render("states/new-state", { title: "New state", msg_error: err })
        }
    }

    /** editStates: modifies a record in the states table */
    async editStates(req, res) {
        try {
            const id_estado = req.params.id_estado
            const name = req.body.nombre.trim()
            const descripName = await statesService.findStates(name)
            if (descripName.length > 0){
                const nameDB = descripName[0].nombre
                if( name === nameDB || nameDB.length === 0){
                    throw "Description already exists"
                }
            }
            await statesService.editStates(id_estado, name)
            const list = await statesService.uploadStates(req.body)
            res.status(200) // Status 'Ok'
            res.render("states/states", { title: "State list", data: list })
        } catch (err) {
            res.status(500) // Status 'Internal Server Error'
            res.json(err) /* "Description already exists" */
        }
    }

    /** editStates: modifies a record in the states table */
    async deleteStates(req, res) {
        try {
            const id_estado = req.params.id_estado
            await statesService.deleteStates(id_estado)
            const list = await statesService.uploadStates(req.body)
            res.status(200) // Status 'Ok'
            res.render("states/states", { title: "State list", data: list })
        } catch (err) {
            res.status(500) // Status 'Internal Server Error'
            res.json(err) /* "Description already exists" */
        }
    }
}

module.exports = new StatesController()

prueba.onlyNumbers = (id_estado) =>{
    let regex  = /^[0-9]*$/
    let onlyNumbers = regex.exec(id_estado)
    return (onlyNumbers)
}