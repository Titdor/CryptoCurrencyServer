const express = require("express");
const router = express.Router();
const cryptoController = require("../controller/controller");
router.get("/getCryptoCurrency", cryptoController.getCryptoCurrency);
module.exports = router;