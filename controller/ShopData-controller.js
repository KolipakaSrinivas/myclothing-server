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


  getshopDataById: async (request, response) => {

    let { id } = request.params;

    try {
      let result = await shopData.findById(id); // .findOne({_id:id})
      response.send({
        status: true,
        restaurants: result,
      });
    } catch (error) {
      // mongoDbError(error.message);
      response.status(500).send({
        status: false,
        message: "Invalid id is passed",
      });
    } 
  },

  filter : async (request, response) => {
   
    let {title} = request.body;

    const filterData = {};
  
  
  
  
  
  
  
    if (title !== undefined) filterData["title"] = title;
    
    try {
      let result = await shopData.find(filterData, {
       
        _id:1,
        id:1,
        title:1,
        routeName:1,
        items:1
      })
  
      
      if (result.length === 0) {
        response.send({
          status: false,
          message: "restaurant is not available",
        });
      } else {
        response.send({
          status: true,
          restaurants:result                              
        })
      }
    } catch (error) {
      // mongoDbError(error.message);
      response.status(500).send({
        status: false,
        message: "Invalid id is passed",
      });
    }
  },

 

}


module.exports = shopDataController
