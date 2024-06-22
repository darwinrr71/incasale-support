/** se crea la  */

const knex = require("knex")
const knexfile = require("./knexfile")

/** TODO in prod, use dependency injection
 * to create knex instance so db access can be mocked 
 * for test.
 * 
  **** TODO en prod, use la inyección de dependencia
 * para crear una instancia de knex para que el 
 * acceso a la base de datos se pueda burlar para la prueba
* */

/** TODO in prod,  don't access knexfile.development directly 
 * but decide with env vars witch config to use.
 * 
 *** TODO en prod, no acceda a knexfile.development directamente, 
 * sino que decida con la configuración de bruja de env vars que 
 * se utilizará. 
 * */

const db = knex(knexfile.development)
module.exports = db