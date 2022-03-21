// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const favAllPo = require("../controllers/fav.js");

router.get("/", favAllPo.asyncAllFav);
router.post("/del", favAllPo.asyncDelFav);
router.post("/add", favAllPo.asyncAddFav);

module.exports = router;
