const express =require("express");

const {createHighlight,getHighlight,getHighlightId,editHighlight,deleteHighlight} = require("../controllers/highlight");
const router = express.Router();

router.post("",createHighlight);
router.get("/getDetailHighlight",getHighlight);
router.get("/:id",getHighlightId);
router.put("/:id",editHighlight);
router.delete("/:id",deleteHighlight);




module.exports =router;