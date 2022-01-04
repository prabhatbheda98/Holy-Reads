const express = require("express");

const {createRead,getRead,getReadById,getCompleted,editcompleted,getReadeByBookId} = require("../controllers/read")
const router = express.Router();

router.post("/read",createRead);
router.get("/getread",getRead);
// router.get("/:id",getReadById);
router.get("/getcompleted",getCompleted);
router.get("/complete/getReadBookByID",getReadeByBookId);
router.put("/editcompleted",editcompleted);


module.exports = router; 