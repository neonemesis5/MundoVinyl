// const { createOneCLiente } = require("../services/cliente_service");
const { regFactura } = require("../services/factura_service");

class facturaController {
	static async newfactura(req, res) {
		try {
			// en este req solo vendran los datos del cliente
			// const newCli = await createOneCLiente({
			// 	...req.body,
			// });
			// if (newCli) {
				const newFac = await regFactura({
					clientId: req.clientId,
					sucursalId: req.sucursal,
					userId: req.usuario,
				});
			// }
			return res.status(newFac.status).send(newFac);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error in regFactura -> ', error });
		}
	}

  static async getAll(req, res) {
		try {
			const response = await allfactura(req.query);
			return res.status(response.status).send(response);
		} catch (error) {
			return res.status(500).send({ message: "error -> ", error });
		}
	}
}
module.exports = facturaController;
