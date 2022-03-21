// /models/stock
const connection = require("../utils/db");

// 取得全部資料
async function getAllFav(memberId) {
  let [data] = await connection.execute(
    "SELECT camp_fav.camp_id AS FAV_CAMPID , camp_fav.user_id AS FAV_Users, camp_fav.valid AS FAV_valid , camp.Cid, camp.valid AS CAMP_valid, camp.camp_tag, camp.camp_name, camp.camp_intro, camp.campcounty_id, camp.campcate1_id, camp_county.*, camp_cate1.id AS cate1id, camp_cate1.camp_item, tent_cate1.id AS TENTID, tent_cate1.tent_item, tent.tentcate_id,tent.price, tent.valid AS TENTVALID, camp_pic.img1, camp_pic.camp_id AS CPICID,tent.camp_id AS TENT_CAMPID FROM camp_fav LEFT JOIN camp ON camp_fav.camp_id = Cid LEFT JOIN camp_county ON campcounty_id = Yid LEFT JOIN camp_cate1 ON campcate1_id = camp_cate1.id LEFT JOIN tent on tent.camp_id = Cid LEFT JOIN tent_cate1 ON tent_cate1.id = tent.tentcate_id LEFT JOIN camp_pic ON camp_pic.camp_id=camp.Cid WHERE camp_fav.user_id = ? AND camp_fav.valid = 1 AND camp.valid = 1 AND tent.valid = 1 GROUP BY camp.Cid ORDER BY camp.camp_name ASC",
    [memberId]
  );
  console.log(data);
  // console.log(data[0].id)
  return data;
}

// 移除
async function removeFav(campId,memberId) {
  let [data] = await connection.execute(
    "DELETE FROM `camp_fav` WHERE `camp_fav`.`camp_id` = ? AND `camp_fav`.`user_id` = ?",
    [campId, memberId]
  );
  console.log(data);
  // console.log(data[0].id)
  return data;
}
// 新增
async function addFav(campId,memberId) {
  let [data] = await connection.execute(
    "INSERT INTO `camp_fav` (`camp_id`, `user_id`) VALUES (?, ?)",
    [campId, memberId]
  );
  console.log(data);
  // console.log(data[0].id)
  return data;
}





module.exports = {
  getAllFav,
  removeFav,
  addFav,
};
