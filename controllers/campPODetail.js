const orderDetailSQLInfo = require("../models/campOrderDetail.js");
//會員
let asyncCampOrderppl = async (req, res, next) => {
  let data = await orderDetailSQLInfo.getCampPOppl(req.session.member.id,req.params.POId);
  res.json(data);
};
// 取得訂單營地資料
let asyncCampOrderCamp = async (req, res, next) => {
  let data = await orderDetailSQLInfo.getCampPOCamp(
    req.session.member.id,
    req.params.POId
  );
  res.json(data);
};
// 取得訂單帳篷資料
let asyncCampOrderTent = async (req, res, next) => {
  console.log("sesson",req.session)
  let data = await orderDetailSQLInfo.getCampPOTent(req.params.POId);
  res.json(data);
};
// 取得訂單加購
let asyncCampOrderAct = async (req, res, next) => {
  let data = await orderDetailSQLInfo.getCampPOAct(req.params.POId);
  res.json(data);
};


module.exports = {
  asyncCampOrderppl,
  asyncCampOrderCamp,
  asyncCampOrderTent,
  asyncCampOrderAct,
};