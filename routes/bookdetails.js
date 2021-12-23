const express = require("express");

const {createbookDetails,getbookDetails,getbookDetailById,editDetails,deleteDetails,getBookByIdList} = require("../controllers/bookdetails")
const router = express.Router();


router.post("/",createbookDetails);
router.get("/",getbookDetails);
router.get("/getBookByDetails",getBookByIdList);
router.get("/:id",getbookDetailById);
router.put("/:id",editDetails);
router.delete("/:id",deleteDetails);


module.exports = router;