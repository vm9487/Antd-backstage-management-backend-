// // /models/stock
// const connection = require("../utils/db");

// // 取得全部資料

// async function getAllCamp() {
//   let [data] = await connection.execute(
//     "SELECT camp_order.id,camp_order.camp_id,orderstatus_id,orderdate_start,orderdate_end,camp.Cid, camp.camp_name,camp.campcounty_id, camp_county.Yid, camp_county.camp_county,camp_pic.camp_id,camp_pic.img1 FROM camp_order LEFT JOIN camp ON camp_order.camp_id=camp.Cid LEFT JOIN camp_county ON camp_county.Yid=camp.campcounty_id LEFT JOIN camp_pic ON camp.Cid=camp_pic.camp_id WHERE user_id=? ORDER BY orderdate_start DESC",
//     [1]
//   );
  
//   console.log(data);
//   // console.log(data[0].id)
//   return data;
// }

// module.exports = {
//   getAllCamp,
// };