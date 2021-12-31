const express = require("express");

const {AddFavourite , getFavourite} = require("../controllers/favourite");  

const router = express.Router();

router.get("/getfavourite",getFavourite)
router.put("/addfavourite",AddFavourite);



module.exports = router;

