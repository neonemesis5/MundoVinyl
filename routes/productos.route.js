const express = require('express');

const ProductsRoute = express.Router();
const Productos = require('../controller/productos.controller');
const { autenticarJWT } = require('../middlewares/JWT');

ProductsRoute.post('/register',autenticarJWT,Productos.createProduct);

ProductsRoute.get('/',autenticarJWT, Productos.getAllProducts);

ProductsRoute.get('/filter',autenticarJWT, Productos.getfilter);

ProductsRoute.get('/details',autenticarJWT, Productos.getProductByID);

ProductsRoute.put('/update',autenticarJWT, Productos.updateProduct);

ProductsRoute.delete('/delete',autenticarJWT, Productos.deleteProduct);

module.exports = ProductsRoute;
