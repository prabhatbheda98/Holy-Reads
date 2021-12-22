const express = require("express");
const router = express.Router();
const { createcategory,getcategory } = require("../controllers/category");

router.post('/',createcategory)
router.get("/",getcategory)

module.exports = router;