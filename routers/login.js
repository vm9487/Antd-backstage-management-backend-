const express = require("express");
const router = express.Router();
const { checkLogin } = require("../middlewares/auth");

router.use(checkLogin);

router.get("/", (req, res, next) => {
  console.log("loginJS:", req.session.member.id);
  // req.session.member = {id:1};
  res.json(req.session.member);
});

module.exports = router;