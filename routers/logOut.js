const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const connection = require("../utils/db");
const express = require("express");
const router = express.Router();
const path = require("path");
require("dotenv").config();


//登出
router.get("/", (req, res, next) => {
  req.session.member = null;
  res.sendStatus(202);
});

module.exports = router;
