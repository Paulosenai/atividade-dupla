const express = require("express");
const controller = require("../controllers/controllers");
const routers = express.Router();

routers.get('/api', controller.getRoot)
routers.get('/api/product', controller.getAllProduct)
routers.get('/api/product/:id' , controller.getById)
routers.post('/api/product' , controller.createProduct)
routers.put ('/api/product/:id' , controller.updateProduct)
routers.delete('/api/product/:id' , controller.deleteProducts)

module.exports = routers;