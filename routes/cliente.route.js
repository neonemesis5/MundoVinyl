const express = require("express");

const clientRoute = express.Router();
const clientController = require("../controller/api_clients.controller");
const { autenticarJWT } = require("../middlewares/JWT");

clientRoute.get("/", autenticarJWT, clientController.getallClientes);
clientRoute.post("/create", autenticarJWT, clientController.createCliente);
clientRoute.get('/details',autenticarJWT, clientController.getCliente);
clientRoute.put('/update',autenticarJWT, clientController.updateCliente);

module.exports = clientRoute;
