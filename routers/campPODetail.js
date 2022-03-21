// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const campPODetail = require("../controllers/campPODetail.js");

// RESTful API 的列表
// 後端資料的網址
router.get("/:POId", campPODetail.asyncCampOrderppl);

module.exports = router;