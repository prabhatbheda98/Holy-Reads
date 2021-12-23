const mongoose = require("mongoose")

const bookdetailsSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    },
    heading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const bookdetails = mongoose.model("bookdetails",bookdetailsSchema);

module.exports = bookdetails;