const  { getAllCategorys }= require("../services/catalogue_service");


//getAllCategory
class Catalogue {
  static async getAllCategory(req, res) {
    try {       
      console.log('hola1')
      const response = await getAllCategorys();
      console.log('hola2')
      return res.status(response.status).send(response);
    } catch (error) {
      // console.log("errorrrr ",error);
      return res
        .status(500)
        .send({ message: 'error in  getAllCatalogue -> '+ error });
    }
  }
}

module.exports = Catalogue;
