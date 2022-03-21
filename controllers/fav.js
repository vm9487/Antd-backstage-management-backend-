const favSQLInfo = require("../models/fav.js");
const { body, validationResult } = require("express-validator");

let asyncAllFav = async (req, res, next) => {
  console.log("sesson", req.session)
  let memberId =req.session.member.id
  let data = await favSQLInfo.getAllFav(memberId);
  res.json(data);
};

let asyncDelFav = async (req, res, next) => {
  console.log("sesson", req.session);
  const { campId } = req.body;
  console.log(campId);
  let memberId = req.session.member.id;
  let data = await favSQLInfo.removeFav(campId, memberId);
  res.json(data);
};

let asyncAddFav = async (req, res, next) => {
  console.log("sesson", req.session);
  
  let memberId = req.session.member.id
   const { campId } = req.body;
  let data = await favSQLInfo.addFav(campId, memberId);
  res.json(data);
};

module.exports = {
  asyncAllFav,
  asyncDelFav,
  asyncAddFav,
};
