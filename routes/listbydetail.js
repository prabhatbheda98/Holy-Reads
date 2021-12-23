const express = require("express");

const { getlistdetail } = require("../controllers/listbydeatil")
const router = express.Router();

router.get("/",getlistdetail)

module.exports = router;