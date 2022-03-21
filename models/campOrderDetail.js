// /models/stock
const connection = require("../utils/db");

// 取得訂單會員資料
async function getCampPOppl(memberId,POId) {
  let [data, fields] = await connection.execute(
    "SELECT camp_order.id AS campOrderID, camp_order.user_id, camp_order.camp_id, camp_order.coupon,camp_order.total, user.id AS UserID, user.user_name, user.phone, user.name, coupon.id AS couponID, coupon.discount FROM camp_order LEFT JOIN user ON camp_order.user_id=user.id LEFT JOIN coupon on coupon.id=camp_order.coupon WHERE camp_order.user_id=? AND camp_order.id=?;",
    [memberId, POId]
  );
  console.log(data);
  return data;
}
// 取得訂單營地資料
async function getCampPOCamp(memberId, POId) {
  let [data, fields] = await connection.execute(
    "SELECT camp_order.id AS CampOrderID, camp_order.orderdate_start,camp_order.orderdate_end,camp_order.user_id,camp_order.camp_id,camp_order.orderstatus_id,camp.Cid,camp.campcate1_id,camp.camp_tag,camp.campregion_id,camp.campcounty_id,camp.campdist_id,camp.camp_name,camp.camp_tag,camp.camp_add,camp_cate1.id AS CATE1ID,camp_cate1.camp_item,camp_county.Yid,camp_county.camp_county,camp_owner.id AS OWNERID, camp_owner.phone,camp_owner.email,camp_pic.id AS CPICID, camp_pic.camp_id,camp_pic.img1,order_status.id AS ORDERSID, order_status.status FROM camp_order LEFT JOIN camp ON camp_order.camp_id=camp.Cid LEFT JOIN camp_cate1 ON camp.campcate1_id=camp_cate1.id LEFT JOIN camp_county ON camp.campcounty_id=camp_county.Yid LEFT JOIN camp_owner ON camp.campowner_id=camp_owner.id LEFT JOIN camp_pic ON camp.Cid=camp_pic.camp_id LEFT JOIN order_status ON camp_order.orderstatus_id=order_status.id WHERE user_id=? AND camp_order.id=?",
    [memberId, POId]
  );
  console.log(data);
  // console.log(data[0].id);
  return data;
}
// 取得訂單帳篷資料 
async function getCampPOTent(POId) {
  let [data, fields] = await connection.execute(
    "SELECT camp_orderdet.id AS CAMPODERID, camp_orderdet.tent_id,camp_orderdet.camp_id,camp_orderdet.camporder_id,camp_orderdet.tent_qty,camp_order.id AS CAMPOID,camp_order.camp_id,tent.id AS Tid,tent.camp_id,tent.tentcate_id,tent.name,tent.img,tent.price,tent.intro,tent_cate1.id AS TCATEID,tent_cate1.tent_item,order_status.id AS ORDERSTATUSID, order_status.status FROM camp_orderdet LEFT JOIN camp_order ON camp_orderdet.camporder_id=camp_order.id LEFT JOIN tent ON camp_orderdet.tent_id=tent.id LEFT JOIN tent_cate1 on tent.tentcate_id=tent_cate1.id LEFT JOIN order_status ON camp_order.orderstatus_id=order_status.id WHERE camporder_id=?",
    [POId]
  );
  console.log(data);
  // console.log(data[0].id);
  return data;
}
// 取得訂單加購資料 
async function getCampPOAct(POId) {
  let [data, fields] = await connection.execute(
    "SELECT camp_order.id AS camporderID, camp_order.add_act_id,add_act_order.id AS ActOrderID, add_act_order.total,add_act_orderdet.id AS actOrderDeID, add_act_orderdet.activity_order_id,add_act_orderdet.number_people,add_act_orderdet.activity_id,add_act_intro.id AS introID, add_act_intro.price,add_act_intro.intro,add_act_intro.name,add_act_intro.pic FROM camp_order LEFT JOIN add_act_order ON camp_order.add_act_id=add_act_order.id LEFT JOIN add_act_orderdet ON add_act_orderdet.activity_order_id=add_act_order.id LEFT JOIN add_act_intro ON add_act_orderdet.activity_id=add_act_intro.id WHERE camp_order.id=?",
    [POId]
  );
  console.log(data);
  // console.log(data[0].id);
  return data;
}

module.exports = {
  getCampPOppl,
  getCampPOCamp,
  getCampPOTent,
  getCampPOAct,
};
