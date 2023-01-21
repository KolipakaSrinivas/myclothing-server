const  shopData = require('../model/ShopData-model')





module.exports.shop_data = async (request, response) => {
    let result = await shopData.find();
    response.send({
      status: true,
      location: result,
    });
  };