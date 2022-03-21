const campSQLInfo = require("../models/campOrder.js");
const connection = require("../utils/db");

let asyncCampOrder = async (req, res, next) => {
  let memberid=req.session.member.id
  let data = await connection.execute(
    "SELECT camp_order.id,camp_order.camp_id,orderstatus_id,orderdate_start,orderdate_end,camp.Cid, camp.camp_name,camp.campcounty_id, camp_county.Yid, camp_county.camp_county,camp_pic.camp_id,camp_pic.img1 FROM camp_order LEFT JOIN camp ON camp_order.camp_id=camp.Cid LEFT JOIN camp_county ON camp_county.Yid=camp.campcounty_id LEFT JOIN camp_pic ON camp.Cid=camp_pic.camp_id WHERE user_id=? ORDER BY orderdate_start DESC",
    [memberid]
  );
  console.log("AllPO",data);
  // console.log(data[0].id)
  res.json(data);
};


module.exports = {
  asyncCampOrder,
};