// 這裏 stock 的 router
const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const registerRules = [
  // 檢查 email 是否符合格式
  body("email").isEmail().withMessage("Email 欄位請填寫正確格式"),
  body("address").trim().notEmpty().withMessage("需要填入地址"),
  body("phone").isMobilePhone(["zh-TW"]).withMessage("手機格式錯誤"),
  body("password")
    .matches(
      /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/
    )
    .withMessage(
      "密碼為數字，小寫字母，大寫字母，特殊符號 至少包含三種，長度為 8 - 16位"
    ),
  body("confirm")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("密碼驗證不一致"),
];
// RESTful API 的列表
router.post("/", registerRules,
  async (req, res, next) => {
    // 拿到驗證的結果
    const validateResult = validationResult(req);
    if (!validateResult.isEmpty()) {
      // validateResult 不是空的
      let error = validateResult.array();
      console.log("validateResult", error);
      return res.status(400).json({
        code: "33001",
        msg: error[0].msg,
      });
    }
    // 雜湊 password
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    // 儲存到資料庫
    let [result] = await connection.execute(
      "UPDATE user SET user_name =?,gender =?,phone =?, address =?, name =?,bday =?,password=? WHERE id =? ",
      [
        req.body.email,
        req.body.gender,
        req.body.phone,
        req.body.address,
        req.body.name,
        req.body.datePicker,
        hashPassword,
        req.session.member.id,
      ]
    );
    console.log(result);

    res.json({ message: "ok" });
  });



module.exports = router;