const  shopData = require('../model/ShopData-model')





const shopDataController = {

  getshopdata: async function (req, res) {
    try {
      let result = await shopData.find();
      res.status(200).send({
        status: true,
        data: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },



}


module.exports = shopDataController
