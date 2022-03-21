// // /models/stock
// const connection = require("../utils/db");


// async function changePOtoCancel(POId) {
//   let [result] = await connection.execute(
//     "UPDATE camp_order SET orderstatus_id=? WHERE camp_order.id=?",
//     [4, POId]
//   );
//   console.log(result);
//   console.log("POI: " + POId);
// }

// module.exports = {
//   changePOtoCancel,
// };