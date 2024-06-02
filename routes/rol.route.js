const express = require("express");

const rolRoute = express.Router();
const rolController = require("../controller/api_rols.controller");
const { autenticarJWT } = require("../middlewares/JWT");

rolRoute.get("/", autenticarJWT, rolController.getAll);
rolRoute.post("/register", autenticarJWT, rolController.createRol);
rolRoute.get('/details',autenticarJWT, rolController.getRol);
rolRoute.put('/update',autenticarJWT, rolController.updateRol);

module.exports = rolRoute;
