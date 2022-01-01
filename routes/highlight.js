const express =require("express");

const {createHighlight,getHighlight,getHighlightId,editHighlight,deleteHighlight,getNote,createNote,getNoteH} = require("../controllers/highlight");
const router = express.Router();

router.post("/",createHighlight);
router.get("/getDetailHighlight",getHighlight);
router.get("/gethighlight/:id",getHighlightId);
router.put("/edithighlight/:id",editHighlight);
router.delete("/:id",deleteHighlight);
router.get("/getnote",getNote);
router.put("/Addnote",createNote);
router.get("/library/getNotesH",getNoteH);


module.exports =router;