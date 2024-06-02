const jwt = require("jsonwebtoken");
require("dotenv").config();

// const UsuarioModel = require("../models/usuarios");
// Service
const { singIn, mewUser, allUser } = require("../services/user_service");

class User {
	static async getOne(req, res) {
		// console.log('==>',req);
		try {
			const response = await singIn(req.body);
			return res.status(200).send(response);
		} catch (error) {
			return res.status(500).send({ message: "error -> ", error });
		}
	}

	static async getAll(req, res) {
		// console.log('==>',req);
		try {
			const response = await singIn(req.body);
			return res.status(200).send(response);
		} catch (error) {
			return res.status(500).send({ message: "error -> ", error });
		}
	}

  static async createRol(req, res) {
  	try {
  		const response = await mewUser(req.body);
  		return res.status(response.status).send(response);
  	} catch (error) {
  		return res.status(500).send({ message: "error -> ", error });
  	}
  }

  static async setRol(req, res) {
  	try {
  		const response = await allUser(req.query);
  		return res.status(response.status).send(response);
  	} catch (error) {
  		return res.status(500).send({ message: "error -> ", error });
  	}
  }
  static async getRol(req, res) {
	  try {
	    const { id } = req.params;
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

  static async updateRol(req, res) {
    try {
      const { id } = req.params;
      const { nombre, apellido, cedula, telefono } = req.body;
      const [updated] = await Cliente.update({ nombre, apellido, cedula, telefono }, { where: { id } });
      if (updated) {
        const cliente = await Cliente.findOne({ where: { id } });
        res.status(200).json({ message: 'Cliente actualizado exitosamente', data: cliente });
      }
      throw new Error('Cliente no encontrado');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el rol' });
    }
  }

}



module.exports = User;
