// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const campPODetailppl = require("../controllers/campPODetail.js");

router.get("/:POId", campPODetailppl.asyncCampOrderAct);

module.exports = router