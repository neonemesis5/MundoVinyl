// eslint-disable-next-line import/newline-after-import
const express = require('express');
const facturaRouter = express.Router();
const facturaController = require('../controller/api_factura.controller');
const { autenticarJWT } = require('../middlewares/JWT');

facturaRouter.post('/register',autenticarJWT, facturaController.newfactura);
facturaRouter.get('/',autenticarJWT, facturaController.getAll);

module.exports = facturaRouter;
