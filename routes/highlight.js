const express =require("express");

const {createHighlight,getHighlight,getHighlightId,editHighlight,deleteHighlight,getNote,createNote,getAllBookHighLight} = require("../controllers/highlight");
const router = express.Router();

router.post("/",createHighlight);
router.get("/getAllBookHighLight",getAllBookHighLight);
router.get("library/getDetailHighlight",getHighlight);
router.get("/gethighlight/:id",getHighlightId);
router.put("/edithighlight/:id",editHighlight);
router.delete("/:id",deleteHighlight);
router.get("/getnote",getNote);
router.put("/Addnote",createNote);



module.exports =router;