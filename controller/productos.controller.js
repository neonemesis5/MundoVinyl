const { 	getAllProductView,
	getProductoByName,
	setProductoById,
	setProducts, } = require('../services/productView_service');
const {
  getProductoByID,
	createProducts,
} = require('../services/producto_service');

// const  { registrarIngreso }= require("../services/opcaban_service");
class Productos {
	// obtener todos los productos
	static async getProductsByCategory(req, res) {
		try {
			const response = await getProductsByCategory({
        categoryId:req.query.categoryId,
        sucursalId:req.query.sucursalId});
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error in  getProductsCategory -> ', error });
		}
	}

	static async createProduct(req, res) {
		try {
			const response = await createProducts({body:req.body});
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error created product -> ', error });
		}
	}

	/*static async setProduct(req, res) {
		try {
			const response = await setProducts(req.query);
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error setted product -> ', error });
		}
	}*/

	static async getAllProducts(req, res) {
		try {       
			// const response= await getallProductos(null);
			const response = await getAllProductView({
				sucursalId: req.query.sucursalId
			});
			return res.status(response.status).send(response);
		} catch (error) {
			// console.log("errorrrr ",error);
			return res
				.status(500)
				.send({ message: 'error in  getAllProducts -> ', error });
		}
	}

	static async getProductByID(req, res) {
		try {
			const response = await getProductoByID({
        productoId: req.query.productoId,
        locationId: req.query.locationId});
			return res.status(response.status).send(response);
		} catch (error) {
			console.log('===>>', error);
			return res
				.status(500)
				.send({ message: 'error in  getProduct -> ', error });
		}
	}

  static async getfilter(req, res) {
		try {
			const response = await getProductoByfilter({
        locationId: req.query.locationId,
        categoryId: req.query.categoryId});
			return res.status(response.status).send(response);
		} catch (error) {
			console.log('===>>', error);
			return res
				.status(500)
				.send({ message: 'error in  getProduct -> ', error });
		}
	}
	// para insertar cantidad actual
	static async updateProduct(req, res) {
		try {
			// console.log("-->",req.body);
			let resp;
      resp = await setProductoById({ 
        productoId:req.query.id,
        body:req.body });
			return res.status(resp.status).send(resp);
		} catch (error) {
			console.log('-->', error);
			return res
				.status(500)
				.send({ message: 'error in updateQtyProduct -> ', error });
		}
	}

  static async deleteProduct(req, res) {
		try {
			// console.log("-->",req.body);
			let resp;
      resp = await deleteProductById({ 
        productoId:req.query.productoId});
			return res.status(resp.status).send(resp);
		} catch (error) {
			console.log('-->', error);
			return res
				.status(500)
				.send({ message: 'error in updateQtyProduct -> ', error });
		}
	}
}
module.exports = Productos;
