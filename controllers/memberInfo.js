// /controllers/stock
const connection = require("../utils/db");

let asyncUserData = async (req, res,
   next) => {
  let memberId = req.session.member.id;
  console.log("sesson",req.session.member.id)
  let data = await connection.execute( "SELECT * FROM user WHERE id=?",[memberId]);
  console.log(data[0][0]);
  return res.json(data);;
  // res.send ==> 純文字
  // res.render ==> server-side render 會去找樣板
};


module.exports = {
  asyncUserData,
};