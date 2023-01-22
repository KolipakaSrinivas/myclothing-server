const express = require("express");
const router = express.Router();


const shopdad = require('../controller/ShopData-controller')





router.get('/get-shop-data',shopdad.getshopdata)


router.get(
    "/getshop-DataBy-Id/:id",
    shopdad.getshopDataById
  );


router.post("/filter",
  shopdad.filter
)

module.exports = router;