const { Op } = require('sequelize');
const Category = require('../models/categoria');
const Location = require('../models/Location');
const {
	newclienteSchema,
} = require('../middlewares/validations/clientValidation');

// eslint-disable-next-line no-unused-vars
async function getAllCategory() {
  console.log('hola en services')
	const response = {
		message: 'no records yet',
		status: 400,
		data: null,
	};
  console.log('hola en services')
	try {
		const resp = await Category.findAll();
		if (resp) {
			response.status = 200;
			response.data = resp;
			response.message = 'these are all the data found';
		}
	} catch (error) {
		// console.log("error --->",error);
		response.message = `error in getAllCategory : ${error.details[0].message}`;
	}
	return response;
}

async function getAllLocation() {
  console.log('hola en services')
	const response = {
		message: 'no records yet',
		status: 400,
		data: null,
	};
  console.log('hola en services')
	try {
		const resp = await Location.findAll();
		if (resp) {
			response.status = 200;
			response.data = resp;
			response.message = 'these are all the data found';
		}
	} catch (error) {
		// console.log("error --->",error);
		response.message = `error in getAllLocation : ${error.details[0].message}`;
	}
	return response;
}

module.exports =  {getAllCategory, getAllLocation};