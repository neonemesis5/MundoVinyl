const express = require('express');
const PedidoRouter = express.Router();
const PedidoDetalle = require('../controller/api_pedido.controller');
const { autenticarJWT } = require('../middlewares/JWT');

//PedidoRouter.post('/register',autenticarJWT, PedidoDetalle.regPedido);

PedidoRouter.get('/',autenticarJWT, PedidoDetalle.regPedido);


module.exports = PedidoRouter;
