// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const dashboardInfo = require("../controllers/dashboard");

// RESTful API 的列表

router.get("/user", dashboardInfo.asyncUserData);
router.get("/coupon", dashboardInfo.couponData);
router.get("/allCoupon", dashboardInfo.couponAllData);
router.get("/iti", dashboardInfo.itineraryData);
router.get("/pur", dashboardInfo.purchaseData);


module.exports = router