const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const path = require("path");
const multer = require("multer");
const { resourceUsage } = require("process");
// 圖片要存哪裡？
const storage = multer.diskStorage({
    // 設定儲存的目的地(檔案夾)
    destination: function (req, file, cb) {
        // /public/uploads <-- 檔案夾要先建立好
        cb(null, path.join(__dirname, "..", "assets", "images"));
    },
    filename: function (req, file, cb) {
        console.log("multer-filename", file);
        const ext = file.originalname.split(".").pop();
        cb(null, `member-${Date.now()}.${ext}`);
    },
});

const uploader = multer({
    storage: storage,
    // 過濾圖片
    fileFilter: function (req, file, cb) {
        console.log("file.mimetype", file.mimetype);
        if (
            file.mimetype !== "image/jpeg" &&
            file.mimetype !== "image/jpg" &&
            file.mimetype !== "image/png"
        ) {
          // 若不接受該檔案，呼叫 cb() 並帶入 false
          cb(new Error("不接受的檔案型態"), false);
        } else {
             // 若接受該檔案，呼叫 cb() 並帶入 true
            cb(null, true);
        }
    },
    // 檔案尺寸
    limits: {
        // 1K: 1024
        fileSize: 1000 * 1024,
    },
});

router.post(
  "/",
  uploader.single("photo"),
  async (req, res, next) => {
    // 處理圖片
    console.log("req.file", req.file);
    let filename = req.file ? req.file.filename : "";
    console.log("filename", filename);
    // 儲存到資料庫
    let memberId = req.session.member.id;
    let [result] = await connection.execute(
      "INSERT INTO user_pic (user_id, img , valid) VALUES (?, ?, ?)",
      [memberId, filename, 1]
    );
    console.log(result);

    res.json({ message: "ok" });
  },
  (error, req, res, next) => {
    // 上傳失敗，丟出錯誤訊息時執行
    res.status(400).send({ error: error.message });
  }
);
module.exports = router;