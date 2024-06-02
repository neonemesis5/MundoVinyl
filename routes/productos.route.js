const express = require('express');

const ProductsRoute = express.Router();
const Productos = require('../controller/productos.controller');
const { autenticarJWT } = require('../middlewares/JWT');

//ProductsRoute.get('/details/',autenticarJWT,Productos.getProductsByCategory);
ProductsRoute.post('/register',autenticarJWT,Productos.createProduct);

ProductsRoute.get('/filter',autenticarJWT, Productos.getAllProducts);
ProductsRoute.get('/details',autenticarJWT, Productos.getProductsByCategory);
ProductsRoute.put('/update',autenticarJWT, Productos.updateQtyProduct);

module.exports = ProductsRoute;
