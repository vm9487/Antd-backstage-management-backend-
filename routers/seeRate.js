const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

// RESTful API 的列表
router.get("/:POId", async (req, res, next) => {
  let POId = req.params.POId;
  let memberid = req.session.member.id;
  let [result] = await connection.execute(
    "SELECT camp_rate.*, user_pic.id AS PICId, user_pic.user_id AS UserPicUserId, user_pic.img, user_pic.valid, camp_order.orderstatus_id, camp_order.camp_id AS orderCampID FROM `camp_rate` LEFT JOIN user_pic ON camp_rate.user_id = user_pic.user_id LEFT JOIN camp_order ON camp_order.camp_id=camp_rate.camp_id WHERE camp_rate.order_id=? AND camp_rate.user_id=? ORDER BY `camp_rate`.`id` DESC,user_pic.id DESC Limit 1",
    [POId, memberid]
  );
  console.log(result);
  // console.log(`POId:" ${ POId }`);
  res.json(result);
});

module.exports = router;
