const {
	createOneEmpleado,
	getAllEmpleado,
} = require('../services/cliente_service');

class empleadoController {

	static async getallEmpleado(req, res) {
		try {
			const resp = await getAllEmpleado(null);
			res.status(resp.status).send(resp);
		} catch (error) {
			// console.error("==> ", error);
			res.status(500).json({ message: 'Error in endpoint getallEmpleado' });
		}
	}

	static async createEmpleado(req, res) {
		try {
			let cliente;
			if (req.body.hasOwnProperty('cliente')) {
				// console.log("entro");
        console.log(`body: ${req.body}`)
				cliente = await createOneEmpleado({ ...req.body });
			} else if (req.body.hasOwnProperty('clientes')) {
				// cliente = await createManyCLientes({});
			} else {
			}
			res.status(cliente.status).json(cliente);
		} catch (error) {
			// console.error(error);
			res.status(500).json({ message: 'Error al crear el cliente' });
		}
	}

  static async updateEmpleado(req, res) {
    try {
      const { id } = req.params.id;
      const { nombre, apellido, cedula, telefono } = req.body;
      const [updated] = await Cliente.update({ nombre, apellido, cedula, telefono }, { where: { id } });
      if (updated) {
        const cliente = await Cliente.findOne({ where: { id } });
        res.status(200).json({ message: 'Cliente actualizado exitosamente', data: cliente });
      }
      throw new Error('Cliente no encontrado');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
  }
    
  static async getEmpleado(req, res) {
	  try {
	    const { id } = req.params.id;
      console.log('id:   '+id)
	    const cliente = await Cliente.findOne({ where: { id } });
	    if (cliente) {
	      res.status(200).json({ message: 'Cliente encontrado', data: cliente });
	    }
	    throw new Error('Cliente no encontrado');
	  } catch (error) {
	    console.error(error);
	    res.status(404).json({ message: 'Cliente no encontrado' });
	  }
	}
}

module.exports = empleadoController;