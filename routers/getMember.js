const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  let members = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(members);
  if (members.length === 0) {
    // 查不到，表示根本沒註冊過
    return res.status(400).send({
      code: "55555",
      msg: "not log in",
    });
  } 
    if (members.length !== 0) {
      // 查不到，表示根本沒註冊過
      let test=Stringify(members)
      return res.json({
        test,
      });
    } 

    let member = members[0];
    console.log(`dd:${ member}` );
  
  // // 整理需要的資料
  // let returnMember = {
  //   id: member.id,
  // };

  // req.session.member = returnMember;

  // res.json({
  //   hello: "0",
  //   // data: member,
  // });
});

module.exports = router;
