const express = require("express");

const {createRead,getRead,getReadById,getCompleted,editcompleted} = require("../controllers/read")
const router = express.Router();

router.post("/read",createRead);
router.get("/getread",getRead);
// router.get("/:id",getReadById);
router.get("/getcompleted",getCompleted);
router.put("/editcompleted",editcompleted);


module.exports = router; 