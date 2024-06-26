const  { getAllCategory, getAllLocation }= require("../services/catalogue_service");


//getAllCategory
class Catalogue {
  static async getAllCategory(req, res) {
    try {       
      const response = await getAllCategory();
      return res.status(response.status).send(response);
    } catch (error) {
      // console.log("errorrrr ",error);
      return res
        .status(500)
        .send({ message: 'error in  getAllCatalogue -> '+ error });
    }
  }

  static async getAllLocation(req, res) {
    try {       
      const response = await getAllLocation();
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
