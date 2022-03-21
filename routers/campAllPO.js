// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const campAllPo = require("../controllers/campPO.js");

router.post("/", campAllPo.asyncCampOrder);

module.exports = router;