/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date: 2021-10-01
* Design Name: index.js
*       Tools: Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* 		Open paths of static directories to use in EJS files.
*-----------------------------------------------------------*/
/** crea un enrutador */
const express = require("express")
const statesController = require("../controller/states")
const routesjs = express.Router()
/** eniviar solicitud al servidor 
 *  crear un recurso del servidor
 *  Adicionar estado
*/
//router.get("/", (req, res) => {
//   res.render("index")
//});

/*********************  
 * state maintenance *
 *********************/
/** GET - ALL THE STATES (uploadStates): retrieves all rows from the states table */ 
routesjs.get("/states/states", statesController.uploadStates)

/** GET - NEW (uploadFormNew): load a blank form to create a new state */
routesjs.get("/states/new-state", statesController.uploadFormNew)

/** GET - EDIT (uploadFormEdit): retrieve a record from states table */
routesjs.get("/states/edit-state/:id_estado", statesController.uploadFormEdit)

/** GET - DELETE (uploadFormDelete): retrieve a record from states table */
routesjs.get("/states/delete-state/:id_estado", statesController.uploadFormDelete)

/** POST - NEW (createStates): create a record in the states table */
routesjs.post("/states/states", statesController.createStates)

/** PUT - EDIT (editStates): modifies a record in the states table */
routesjs.put("/states/:id_estado", statesController.editStates)

/** DELTE - DELETE (deleteStates): delete a record in the states table */
routesjs.delete("/states/:id_estado", statesController.deleteStates)

module.exports = routesjs