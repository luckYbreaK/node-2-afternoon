// ===Node Modules===
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// ===Node Modules===

const products_controller = require('./controllers/products_controller');

const app = express();
app.use(bodyParser.json())

// ===Endpoints===
app.post("/api/product", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/product/:id", products_controller.getOne);
app.put("/api/product/:id", products_controller.update);
app.delete("/api/product/:id", products_controller.delete);
// ===Endpoints===

// ===DB and Express server
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Listening on port: ${process.env.SERVER_PORT}`);
    })
}).catch( err => console.log(err));
// ===DB and Express server