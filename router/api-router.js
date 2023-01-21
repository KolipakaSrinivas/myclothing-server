const express = require("express");
const router = express.Router();


const shopdad = require('../controller/ShopData-controller')





router.get('/get-shop-data',shopdad.getshopdata)


module.exports = router;