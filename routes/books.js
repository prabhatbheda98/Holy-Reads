const express = require('express');

const {createbooks,getbooks,getbook,editbook,deletebook} =  require("../controllers/books")
const router = express.Router();

router.post('/', createbooks);
router.get('/', getbooks);
router.get("/byCategory",getbook)
router.put('/:id', editbook);
router.delete('/:id', deletebook);

module.exports = router;