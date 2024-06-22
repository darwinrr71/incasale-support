/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date: 2021-10-01
*     Program : Incasale Index
*   Path Name : incasale-support/index.js
*       Tools : Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* - create express server.
* - Cross-Origin Resource Sharing(CORS).
*   Allows requests from domain-B to domain-A
*   if domain-B is not configured, you will get a
*   error for violation of CORS policy
* - process.env.PORT || 4000.
*   When the project is uploaded to the server, 
*   the server looks for an available port, if it
*   does not find one, it assigns port 4000
*-----------------------------------------------------------*/

const express = require("express")
const router = require("./routes/index")
const routesjs = require("./routes/routesjs")
const cors = require("cors")
const port = process.env.PORT || 4000

// Create a new Express Instance
const app = express()
/* app.set('view engine', 'ejs') is self-explanatory. We are setting EJS as the Express app view engine. By default, Express will look inside of a views folder when resolving the template files, which is why we had to create a views folder.*/
app.set("view engine", "ejs")
app.set("views", __dirname + "/views/pages")

//define public folder
app.use(express.static(__dirname + "/public"))

/* The express.urlencoded() middleware function is used to extract the data from the request body and add it to the request object in the form of req.body. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
express.urlenconded({ extended: false }): Permite recibir parámetros por url y formularios.*/
app.use(express.urlencoded( {extended:false} ))
/* if your client sends data to the server as JSON, you should use express.json() to parse and access that data
express.json() : Permite recibir parámetros en formato json.*/
app.use(express.json())
app.use(cors())
app.use(router)        //This router is for the backend side
app.use(routesjs)

//error page - render the page to 404.ejs
app.use((req, res) =>{
    res.status(404).render("404")
})

app.listen(port, () => 
    console.log(`The server is running on port:${port}`)
)