const express = require("express");

const catalogueRoute = express.Router();

const { autenticarJWT } = require("../middlewares/JWT");

const catalogueController = require("../controller/catalogue.controller");

catalogueRoute.get('/category',autenticarJWT, catalogueController.getAllCategory);

module.exports = catalogueRoute;