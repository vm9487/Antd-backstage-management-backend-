const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
// RESTful API 的列表
router.post("/", async (req, res, next) => {

  const POId = req.body.POId;
  // const POId = req.params.POId;
  let [result] = await connection.execute(
    "UPDATE camp_order SET camp_order.orderstatus_id=? WHERE camp_order.id=?",
    [3, POId]
  );
  console.log(result);
  // console.log(`POId:" ${ POId }`);
  res.json(result);
});

module.exports = router;
