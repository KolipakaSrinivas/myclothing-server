const express = require("express");
const router = express.Router();

const shop_data = require('../controller/ShopData-controller')


router.get('/shopdata',shop_data.shop_data)